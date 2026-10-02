import { test, expect } from '@playwright/test';
import {
  auth,
  readNewfoldSolutionsBranding,
  SELECTORS,
} from '../helpers/index.mjs';

const pluginId = process.env.PLUGIN_ID || 'bluehost';

test.describe('Solutions module smoke', { tag: '@env-any' }, () => {
  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
  });

  test('My Solutions tab renders the add-new app shell', async ({ page }) => {
    test.setTimeout(90_000);

    await auth.navigateToAdminPage(page, 'plugin-install.php');

    const mySolutionsTab = page.locator('a[href*="tab=nfd_solutions"]');
    test.skip(
      (await mySolutionsTab.count()) === 0,
      'My Solutions tab (nfd_solutions) is not registered on this site'
    );

    await mySolutionsTab.first().click();
    await expect(page.locator(SELECTORS.addNewApp)).toBeVisible({ timeout: 30_000 });
  });

  test('Plugin app commerce route exposes localized branding payload', async ({ page }) => {
    test.setTimeout(90_000);

    await auth.navigateToAdminPage(page, `admin.php?page=${pluginId}#/commerce`);

    const title = page.locator(SELECTORS.solutionsPageTitle).first();
    const titleVisible = await title
      .waitFor({ state: 'visible', timeout: 30000 })
      .then(() => true)
      .catch(() => false);
    test.skip(
      !titleVisible,
      'Solutions commerce shell is not available in this host plugin build'
    );

    await expect
      .poll(async () => readNewfoldSolutionsBranding(page), {
        timeout: 20000,
        intervals: [100, 250, 500],
        message: 'window.NewfoldSolutions.branding should hydrate on the commerce route',
      })
      .not.toBe(null);

    const branding = await readNewfoldSolutionsBranding(page);
    expect(typeof branding?.brandDisplayName).toBe('string');
    expect(String(branding.brandDisplayName).length).toBeGreaterThan(0);
    expect(typeof branding?.pluginId).toBe('string');
    expect(String(branding.pluginId).length).toBeGreaterThan(0);
  });
});
