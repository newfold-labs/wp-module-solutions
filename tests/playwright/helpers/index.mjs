/**
 * Solutions Module Test Helpers for Playwright
 */
import { expect } from '@playwright/test';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { readFileSync } from 'fs';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve plugin directory from PLUGIN_DIR env var (set by playwright.config.mjs) or process.cwd()
const pluginDir = process.env.PLUGIN_DIR || process.cwd();

// Build path to plugin helpers (.mjs extension for ES module compatibility)
const finalHelpersPath = join(pluginDir, 'tests/playwright/helpers/index.mjs');

// Import plugin helpers using file:// URL
const helpersUrl = pathToFileURL(finalHelpersPath).href;
const pluginHelpers = await import(helpersUrl);

// Destructure plugin helpers
let { auth, wordpress, newfold, a11y, utils } = pluginHelpers;
const { fancyLog } = utils;

// Load solution fixtures
const fixturesPath = join(__dirname, '../fixtures');

function loadFixture(name) {
  const filePath = join(fixturesPath, `${name}.json`);
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

// Pre-load fixtures
const FIXTURES = {
  none: loadFixture('none'),
  creator: loadFixture('creator'),
  service: loadFixture('service'),
  commerce: loadFixture('commerce'),
};

// Common selectors
const SELECTORS = {
  // Solutions page in plugin app
  solutionsPageTitle: '.nfd-page-solutions h1',
  upgradeBanner: '.nfd-solutions-upgrade-banner',
  upgradeBannerButton: '.nfd-page-solutions .nfd-solutions-upgrade-banner__button',
  toolCard: (slug) => `.nfd-solutions-tool-card-${slug}`,
  toolCardButton: (slug) => `.nfd-solutions-tool-card-${slug} .nfd-button`,
  toolCardTitle: (slug) => `.nfd-solutions-tool-card-${slug} h4`,

  // Add new plugins page (My Solutions tab)
  addNewApp: '#nfd-add-new-app',
  addNewAppTitle: '#nfd-add-new-app h1:first-of-type',
  pluginsCardList: '.nfd-plugins-card-list',
  mySolutionsAppContainer: '.nfd-my-solutions-app-container',
  mySolutionsPluginsList: '.nfd-my-solutions-app-container .nfd-plugins-card-list:first-of-type',
  mySolutionsUpgradeBanner: '.nfd-my-solutions-app-container .nfd-solutions-upgrade-banner',
  mySolutionsUpgradeBannerButton: '.nfd-my-solutions-app-container .nfd-solutions-upgrade-banner__button',
  pluginCard: (slug) => `.plugin-card-${slug}`,
  pluginCardTitle: (slug) => `.plugin-card-${slug} h2`,
  pluginCardButton: (slug) => `.plugin-card-${slug} .button`,
  brandLogoSvg: '.plugin-install-nfd_solutions a svg',

  // Installer modal
  installerModal: '.nfd-installer-modal__content',
  installerModalSubheading: '.nfd-installer-modal__content-subheading',

  // Plugins page
  pluginsList: '#the-list',
  pluginRow: (slug) => `tr[data-slug="${slug}"]`,
  deactivateLink: (slug) => `a#deactivate-${slug}`,
};

// CTB IDs
const CTB_IDS = {
  solutionFamily: '5dc83bdd-9274-4557-a6d7-0b2adbc3919f',
  yoastPremium: '57d6a568-783c-45e2-a388-847cff155897',
};

const DEFAULT_SET_RETRIES = 2;
const DEFAULT_RETRY_DELAY_MS = 200;

function isWpCliError(output) {
  if (typeof output !== 'string') {
    return false;
  }
  return output.startsWith('Error:') || output.includes('Fatal error') || output.includes('Parse error');
}

async function runWpCli(command) {
  const raw = await wordpress.wpCli(command);
  const output = typeof raw === 'string' ? raw : String(raw ?? '');
  return {
    ok: !isWpCliError(output),
    output,
  };
}

/**
 * Set solution transient
 * 
 * @param {string} solution - Solution type: 'none', 'creator', 'service', 'commerce'
 * @param {number} expiration - Expiration in seconds (default: 3600)
 */
async function setSolution(solution, expiration = 3600, retries = DEFAULT_SET_RETRIES) {
  const fixtureData = FIXTURES[solution];
  if (!fixtureData) {
    fancyLog(`Unknown solution: ${solution}`, 55, 'yellow');
    return {
      ok: false,
      reason: `Unknown solution fixture key: ${solution}`,
    };
  }

  let lastReason = '';

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      // Use set_transient via wp eval so data is stored the same way WordPress expects.
      // Passing large JSON via `wp option update ... '...'` breaks on CI (shell length, quoting).
      const json = JSON.stringify(fixtureData);
      const b64 = Buffer.from(json, 'utf8').toString('base64');
      const setResult = await runWpCli(
        `eval "set_transient( 'newfold_solutions', json_decode( base64_decode( '${b64}' ), true ), ${expiration} );"`
      );
      if (!setResult.ok) {
        lastReason = setResult.output;
      } else {
        const verifyResult = await verifySolutionTransient(solution);
        if (verifyResult.ok) {
          fancyLog(`Solution set to ${solution}`, 55, 'green');
          return { ok: true, reason: '' };
        }
        lastReason = verifyResult.reason;
      }
    } catch (error) {
      lastReason = error?.message || String(error);
    }

    fancyLog(`Solution setup retry (${attempt}/${retries}) for ${solution}: ${lastReason}`, 55, 'yellow');
    if (attempt < retries) {
      await new Promise((resolve) => setTimeout(resolve, DEFAULT_RETRY_DELAY_MS));
    }
  }

  fancyLog(`Failed to set solution ${solution}: ${lastReason}`, 55, 'yellow');
  return {
    ok: false,
    reason: `Unable to verify newfold_solutions transient for "${solution}": ${lastReason}`,
  };
}

/**
 * Normalize `solution` field from API/fixture for comparisons (null/false/empty).
 *
 * @param {*} value
 * @returns {string|null}
 */
function normalizeSolutionSku(value) {
  if (value === false || value === undefined || value === '' || value === null) {
    return null;
  }
  return value;
}

/**
 * Verify transient payload persisted and `solution` matches fixture expectation.
 *
 * @param {string} solutionKey - 'none' | 'creator' | 'service' | 'commerce'
 */
async function verifySolutionTransient(solutionKey) {
  if (!Object.prototype.hasOwnProperty.call(FIXTURES, solutionKey)) {
    return {
      ok: false,
      reason: `verifySolutionTransient: unknown solution fixture key: ${solutionKey}`,
    };
  }

  const expected = normalizeSolutionSku(FIXTURES[solutionKey]?.solution);
  const readResult = await runWpCli(
    `eval '$value = get_transient("newfold_solutions"); if (!is_array($value)) { echo wp_json_encode(["ok" => false, "reason" => "transient_missing_or_not_array"]); return; } $solution = array_key_exists("solution", $value) ? $value["solution"] : null; echo wp_json_encode(["ok" => true, "solution" => $solution]);'`
  );
  if (!readResult.ok) {
    return {
      ok: false,
      reason: `wp-cli transient read failed: ${readResult.output}`,
    };
  }

  let payload;
  try {
    const lines = readResult.output
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    const jsonLine = lines[lines.length - 1];
    payload = JSON.parse(jsonLine);
  } catch {
    return {
      ok: false,
      reason: `unexpected transient read output: ${readResult.output}`,
    };
  }

  if (!payload?.ok) {
    return {
      ok: false,
      reason: payload?.reason || 'transient payload unavailable',
    };
  }

  const actual = normalizeSolutionSku(payload.solution);
  if (actual !== expected) {
    return {
      ok: false,
      reason: `transient solution mismatch (expected: ${String(expected)}, actual: ${String(actual)})`,
    };
  }

  return { ok: true, reason: '' };
}

/**
 * Wait until `window.NewfoldSolutions` is present and `solution` matches the fixture.
 * This follows the same payload `wp_localize_script` injects on plugin-install and plugin app screens.
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} solutionKey
 */
async function expectNewfoldSolutionsHydrated(page, solutionKey) {
  const expected = normalizeSolutionSku(FIXTURES[solutionKey]?.solution);
  await expect
    .poll(
      async () =>
        page.evaluate((exp) => {
          const ns = window.NewfoldSolutions;
          if (!ns) {
            return false;
          }
          const norm = (v) =>
            v === false || v === undefined || v === '' || v === null ? null : v;
          return norm(ns.solution) === norm(exp);
        }, expected),
      {
        message: `window.NewfoldSolutions.solution did not match fixture (${solutionKey})`,
        timeout: 20000,
        intervals: [100, 250, 500, 1000],
      }
    )
    .toBe(true);
}

async function verifyNewfoldSolutionsHydrated(page, solutionKey) {
  try {
    await expectNewfoldSolutionsHydrated(page, solutionKey);
    return { ok: true, reason: '' };
  } catch (error) {
    return {
      ok: false,
      reason: error?.message || `window.NewfoldSolutions.solution did not match fixture (${solutionKey})`,
    };
  }
}

/**
 * Seed transient, run lightweight preflight, open My Solutions tab, optionally reload,
 * then assert localized data.
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} solutionKey
 * @param {string|null} queryParam - URL `solution` query value (e.g. 'commerce'), or null
 * @param {{ reload?: boolean }} [navOptions]
 */
async function setSolutionAndOpenMySolutions(page, solutionKey, queryParam, navOptions = {}) {
  const setup = await setSolution(solutionKey);
  if (!setup.ok) {
    const reason = `[solutions setup] unable to seed solution "${solutionKey}" before navigation: ${setup.reason}`;
    fancyLog(reason, 55, 'yellow');
    return { ok: false, reason };
  }

  await navigateToMySolutionsTab(page, queryParam, navOptions);
  const hydrated = await verifyNewfoldSolutionsHydrated(page, solutionKey);
  if (!hydrated.ok) {
    const reason = `[solutions setup] seeded "${solutionKey}" but localized data did not hydrate as expected: ${hydrated.reason}`;
    fancyLog(reason, 55, 'yellow');
    return { ok: false, reason };
  }

  return { ok: true, reason: '' };
}

/**
 * Seed transient, run lightweight preflight, open the in-plugin Solutions app (hash #/commerce),
 * optionally reload, then assert localized data.
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} solutionKey
 * @param {string} pluginId - Admin page slug (e.g. bluehost)
 * @param {string|null} solutionQueryParam - URL `solution` query value or null
 * @param {{ reload?: boolean }} [navOptions]
 */
async function setSolutionAndOpenSolutionsPage(
  page,
  solutionKey,
  pluginId = 'bluehost',
  solutionQueryParam = null,
  navOptions = {}
) {
  const setup = await setSolution(solutionKey);
  if (!setup.ok) {
    const reason = `[solutions setup] unable to seed solution "${solutionKey}" before navigation: ${setup.reason}`;
    fancyLog(reason, 55, 'yellow');
    return { ok: false, reason };
  }

  await navigateToSolutionsPage(page, pluginId, solutionQueryParam, navOptions);
  const hydrated = await verifyNewfoldSolutionsHydrated(page, solutionKey);
  if (!hydrated.ok) {
    const reason = `[solutions setup] seeded "${solutionKey}" but localized data did not hydrate as expected: ${hydrated.reason}`;
    fancyLog(reason, 55, 'yellow');
    return { ok: false, reason };
  }

  return { ok: true, reason: '' };
}

/**
 * Clear solution transient
 */
async function clearSolutionTransient() {
  try {
    // Run both delete commands in parallel for faster cleanup
    await Promise.all([
      wordpress.wpCli('option delete _transient_newfold_solutions', {
        failOnNonZeroExit: false,
      }),
      wordpress.wpCli('option delete _transient_timeout_newfold_solutions', {
        failOnNonZeroExit: false,
      }),
    ]);
  } catch (error) {
    fancyLog(`Failed to clear solution transient: ${error.message}`, 55, 'yellow');
  }
}

/**
 * Uninstall a plugin
 * 
 * @param {string} pluginSlug - Plugin slug to uninstall
 */
async function uninstallPlugin(pluginSlug) {
  try {
    await wordpress.wpCli(`plugin uninstall ${pluginSlug} --deactivate`, {
      timeout: 15000,
      failOnNonZeroExit: false,
    });
  } catch (error) {
    fancyLog(`Failed to uninstall ${pluginSlug}: ${error.message}`, 55, 'yellow');
  }
}

/**
 * Navigate to solutions page in plugin app
 * 
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} pluginId - Plugin ID (default: 'bluehost')
 * @param {string} solution - Solution query param (optional)
 */
async function navigateToSolutionsPage(page, pluginId = 'bluehost', solution = null, options = {}) {
  const { reload = false } = options || {};
  let url = `/wp-admin/admin.php?page=${pluginId}`;
  if (solution) {
    url += `&solution=${solution}`;
  }
  url += '#/commerce';
  await page.goto(url, { waitUntil: 'load' });
  if (reload) {
    await page.reload({ waitUntil: 'load' });
  }
}

/**
 * Navigate to plugin install page with My Solutions tab
 * 
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} solution - Solution query param (optional)
 * @param {{ reload?: boolean }} [options] - Set `reload: true` to force a second full request so PHP re-reads transients and re-localizes scripts
 */
async function navigateToMySolutionsTab(page, solution = null, options = {}) {
  const { reload = false } = options || {};
  let url = '/wp-admin/plugin-install.php?tab=nfd_solutions';
  if (solution) {
    url += `&solution=${solution}`;
  }
  await page.goto(url, { waitUntil: 'load' });
  if (reload) {
    await page.reload({ waitUntil: 'load' });
  }
}

/**
 * Navigate to plugins page
 * 
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function navigateToPluginsPage(page) {
  await page.goto('/wp-admin/plugins.php');
}

/**
 * Verify button has installer attributes for downloadable plugin
 * 
 * @param {import('@playwright/test').Locator} button - Button locator
 * @param {object} attrs - Expected attributes
 */
async function verifyInstallerAttributes(button, attrs) {
  if (attrs.downloadUrl) {
    await expect(button).toHaveAttribute('data-nfd-installer-download-url', attrs.downloadUrl);
  }
  if (attrs.basename) {
    await expect(button).toHaveAttribute('data-nfd-installer-plugin-basename', attrs.basename);
  }
  if (attrs.name) {
    await expect(button).toHaveAttribute('data-nfd-installer-plugin-name', attrs.name);
  }
  if (attrs.plsSlug) {
    await expect(button).toHaveAttribute('data-nfd-installer-pls-slug', attrs.plsSlug);
  }
  if (attrs.plsProvider) {
    await expect(button).toHaveAttribute('data-nfd-installer-pls-provider', attrs.plsProvider);
  }
  if (attrs.ctbId) {
    await expect(button).toHaveAttribute('data-ctb-id', attrs.ctbId);
  }
  if (attrs.target) {
    await expect(button).toHaveAttribute('target', attrs.target);
  }
  if (attrs.isActive !== undefined) {
    if (attrs.isActive) {
      await expect(button).toHaveAttribute('data-is-active', 'true');
    } else {
      await expect(button).not.toHaveAttribute('data-is-active');
    }
  }
}

/**
 * Verify button does not have certain attributes
 * 
 * @param {import('@playwright/test').Locator} button - Button locator
 * @param {string[]} attrs - Attribute names that should NOT be present
 */
async function verifyMissingAttributes(button, attrs) {
  for (const attr of attrs) {
    await expect(button).not.toHaveAttribute(attr);
  }
}

/**
 * Verify button href contains expected string
 * 
 * @param {import('@playwright/test').Locator} button - Button locator
 * @param {string} expected - Expected substring in href
 */
async function verifyHrefContains(button, expected) {
  const href = await button.getAttribute('href');
  expect(href).toContain(expected);
}

/**
 * Click install button and verify modal
 * 
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} pluginSlug - Plugin slug
 * @param {string} pluginName - Expected plugin name in modal
 */
async function clickInstallAndVerifyModal(page, pluginSlug, pluginName) {
  const button = page.locator(SELECTORS.pluginCardButton(pluginSlug));
  await button.click();

  // Verify modal opens
  const modal = page.locator(SELECTORS.installerModal);
  await expect(modal).toBeVisible();

  const subheading = page.locator(SELECTORS.installerModalSubheading);
  await expect(subheading).toContainText(pluginName);

  // Wait for modal to close (installation complete)
  await expect(modal).toBeHidden({ timeout: 30000 });

  // Wait for page to finish loading after installation redirect
  await page.waitForLoadState('domcontentloaded');
}

/**
 * Verify plugin is installed and active
 * 
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} pluginSlug - Plugin slug
 */
async function verifyPluginInstalled(page, pluginSlug) {
  await navigateToPluginsPage(page);

  const pluginRow = page.locator(SELECTORS.pluginRow(pluginSlug));
  await pluginRow.scrollIntoViewIfNeeded();
  await expect(pluginRow).toBeVisible();
}

/**
 * Verify plugin is active
 * 
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} pluginSlug - Plugin slug
 */
async function verifyPluginActive(page, pluginSlug) {
  const deactivateLink = page.locator(SELECTORS.deactivateLink(pluginSlug));
  await deactivateLink.scrollIntoViewIfNeeded();
  await expect(deactivateLink).toBeVisible();
}

/**
 * Deactivate a plugin via UI
 * 
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} pluginSlug - Plugin slug
 */
async function deactivatePluginViaUI(page, pluginSlug) {
  await navigateToPluginsPage(page);
  const deactivateLink = page.locator(SELECTORS.deactivateLink(pluginSlug));
  await deactivateLink.click();
  await page.waitForLoadState('networkidle');
}

export {
  // Plugin helpers (re-exported for convenience)
  auth,
  wordpress,
  newfold,
  a11y,
  utils,
  // Constants
  SELECTORS,
  CTB_IDS,
  FIXTURES,
  // Solution helpers
  setSolution,
  verifySolutionTransient,
  expectNewfoldSolutionsHydrated,
  setSolutionAndOpenMySolutions,
  setSolutionAndOpenSolutionsPage,
  clearSolutionTransient,
  uninstallPlugin,
  // Navigation helpers
  navigateToSolutionsPage,
  navigateToMySolutionsTab,
  navigateToPluginsPage,
  // Verification helpers
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
  clickInstallAndVerifyModal,
  verifyPluginInstalled,
  verifyPluginActive,
  deactivatePluginViaUI,
};

