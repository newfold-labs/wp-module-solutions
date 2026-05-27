import { test, expect } from '@playwright/test';
import {
  auth,
  newfold,
  clearSolutionTransient,
  setSolutionAndOpenMySolutions,
  expectNewfoldSolutionsHydrated,
  uninstallPlugin,
  navigateToMySolutionsTab,
  verifyPluginInstalled,
  verifyPluginActive,
  clickInstallAndVerifyModal,
  CTB_IDS,
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
  SELECTORS,
} from '../helpers/index.mjs';

let yoastSupported = false;
let yoastSkipMessage = '';

test.describe('My Solutions on Plugin Install Page - Yoast Check', () => {

  test.beforeAll(async () => {
    yoastSupported = await newfold.supportsYoast();
    yoastSkipMessage = await newfold.getSkipMessage('yoast');
  });

  test.skip(() => !yoastSupported, yoastSkipMessage);

  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
    await uninstallPlugin('wordpress-seo');
  });

  test.afterAll(async () => {
    await uninstallPlugin('wordpress-seo');
    await clearSolutionTransient();
  });

  // Test free Yoast SEO plugin install functions
  test('Yoast SEO plugin installs properly', async ({ page }) => {
    // Note: Yoast is already uninstalled in beforeEach via wp-cli
    const pre = await setSolutionAndOpenMySolutions(page, 'creator', 'creator');
    test.skip(!pre.ok, pre.reason);

    const pluginsList = page.locator(SELECTORS.mySolutionsPluginsList);
    await expect(pluginsList).toBeVisible();

    const yoastCard = page.locator(SELECTORS.pluginCard('yoast-seo'));
    const yoastTitle = page.locator(SELECTORS.pluginCardTitle('yoast-seo'));
    await yoastTitle.scrollIntoViewIfNeeded();
    await expect(yoastTitle).toContainText('Yoast SEO');
    await expect(yoastTitle).toBeVisible();

    const yoastButton = page.locator(SELECTORS.pluginCardButton('yoast-seo'));
    await verifyInstallerAttributes(yoastButton, {
      name: 'Yoast SEO',
      downloadUrl: 'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip',
    });
    await verifyMissingAttributes(yoastButton, [
      'data-is-active',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-ctb-id',
      'target',
    ]);
    await verifyHrefContains(yoastButton, 'wpseo_dashboard');

    await clickInstallAndVerifyModal(page, 'yoast-seo', 'Yoast');

    await expect(page).toHaveURL(/wpseo_dashboard/);

    await verifyPluginInstalled(page, 'wordpress-seo');
    await verifyPluginActive(page, 'wordpress-seo');

    await navigateToMySolutionsTab(page, 'creator');
    await expectNewfoldSolutionsHydrated(page, 'creator');

    const yoastButtonAfter = page.locator(SELECTORS.pluginCardButton('yoast-seo'));
    await expect(yoastButtonAfter).toHaveAttribute('data-is-active', 'true');
    await verifyHrefContains(yoastButtonAfter, 'wpseo_dashboard');
  });

  // Test premium Yoast premium plugin CTB attributes
  test('Yoast Premium plugin has CTB attributes', async ({ page }) => {
    const pre = await setSolutionAndOpenMySolutions(page, 'commerce', 'commerce');
    test.skip(!pre.ok, pre.reason);

    const pluginsList = page.locator(SELECTORS.mySolutionsPluginsList);
    await expect(pluginsList).toBeVisible();

    const yoastPremiumTitle = page.locator(SELECTORS.pluginCardTitle('yoast-premium'));
    await yoastPremiumTitle.scrollIntoViewIfNeeded();
    await expect(yoastPremiumTitle).toContainText('Yoast Premium');
    await expect(yoastPremiumTitle).toBeVisible();

    const yoastPremiumButton = page.locator(SELECTORS.pluginCardButton('yoast-premium'));
    await verifyMissingAttributes(yoastPremiumButton, [
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-download-url',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
    ]);
    await expect(yoastPremiumButton).toHaveAttribute('data-ctb-id', CTB_IDS.yoastPremium);
    await expect(yoastPremiumButton).toHaveAttribute('target', '_blank');

    await verifyHrefContains(yoastPremiumButton, 'yoast.com');
  });

  test('Yoast SEO available for creator', async ({ page }) => {
    const pre = await setSolutionAndOpenMySolutions(page, 'creator', 'creator');
    test.skip(!pre.ok, pre.reason);

    const pluginsList = page.locator(SELECTORS.mySolutionsPluginsList);
    await expect(pluginsList).toBeVisible();

    const yoastButton = page.locator(SELECTORS.pluginCardButton('yoast-seo'));
    await verifyInstallerAttributes(yoastButton, {
      name: 'Yoast SEO',
      downloadUrl: 'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip',
    });
    await verifyMissingAttributes(yoastButton, [
      'data-is-active',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-ctb-id',
      'target',
    ]);
    await verifyHrefContains(yoastButton, 'wpseo_dashboard');
  });
});
