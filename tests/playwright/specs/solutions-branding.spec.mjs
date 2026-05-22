import { test, expect } from '@playwright/test';
import {
  auth,
  clearSolutionTransient,
  setSolutionAndOpenSolutionsPage,
  SELECTORS,
  readNewfoldSolutionsBranding,
} from '../helpers/index.mjs';

const pluginSlug = process.env.PLUGIN_ID || 'bluehost';

/**
 * @param {unknown} value
 * @returns {boolean}
 */
function isWordmarkUnset(value) {
  return value === undefined || value === null || value === false || value === '';
}

test.describe('Solutions page branding', () => {
  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
  });

  test.afterAll(async () => {
    await clearSolutionTransient();
  });

  test('localized branding payload exposes core keys', async ({ page }) => {
    const pre = await setSolutionAndOpenSolutionsPage(page, 'none', pluginSlug, null);
    test.skip(!pre.ok, pre.reason);

    await expect
      .poll(async () => readNewfoldSolutionsBranding(page), {
        timeout: 20000,
        intervals: [100, 250, 500],
        message: 'window.NewfoldSolutions.branding should hydrate on the Solutions app',
      })
      .not.toBe(null);

    const branding = await readNewfoldSolutionsBranding(page);
    expect(branding && typeof branding === 'object').toBeTruthy();

    expect(typeof branding.brandDisplayName).toBe('string');
    expect(branding.brandDisplayName.length).toBeGreaterThan(0);

    expect(typeof branding.pluginId).toBe('string');
    expect(branding.pluginId.length).toBeGreaterThan(0);

    expect(branding.assets && typeof branding.assets === 'object').toBeTruthy();
    expect(branding.urls && typeof branding.urls === 'object').toBeTruthy();
    expect(branding.colors && typeof branding.colors === 'object').toBeTruthy();
  });

  test('localized wordmarkUrl matches preset; BrandLogo UI only on full solutions-page bundle', async ({
    page,
  }) => {
    const pre = await setSolutionAndOpenSolutionsPage(page, 'none', pluginSlug, null);
    test.skip(!pre.ok, pre.reason);

    const title = page.locator(SELECTORS.solutionsPageTitle);
    await expect(title).toBeVisible({ timeout: 20000 });

    const branding = await readNewfoldSolutionsBranding(page);
    expect(branding).not.toBe(null);

    const resolvedId = String(branding.pluginId || '').toLowerCase();
    const wordmarkImg = page.locator(SELECTORS.solutionsBrandLogoImg);
    const fallback = page.locator(SELECTORS.solutionsBrandFallback);

    if ('bluehost' === resolvedId) {
      const wm = branding.assets?.wordmarkUrl;
      expect(typeof wm).toBe('string');
      expect(String(wm)).toContain('bluehost.svg');
    } else {
      expect(isWordmarkUnset(branding.assets?.wordmarkUrl)).toBe(true);
    }

    /**
     * Brand plugins (e.g. Bluehost) embed `solutions-page-component` (Content only) and render
     * their own page title — `BrandLogo` lives in the standalone `solutions-page` bundle Header.
     */
    const moduleHeader = page.locator('.nfd-solutions-app-header');
    const hasModuleHeader = (await moduleHeader.count()) > 0;

    if (!hasModuleHeader) {
      await expect(wordmarkImg).toHaveCount(0);
      await expect(fallback).toHaveCount(0);
      return;
    }

    if ('bluehost' === resolvedId) {
      await expect(wordmarkImg).toBeVisible({ timeout: 20000 });
      await expect(fallback).toHaveCount(0);
      return;
    }

    await expect(wordmarkImg).toHaveCount(0);
    await expect(fallback).toBeVisible({ timeout: 20000 });
    await expect(fallback).toContainText(branding.brandDisplayName || '');
  });
});
