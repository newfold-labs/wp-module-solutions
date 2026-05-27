import { test, expect } from '@playwright/test';
import {
  auth,
  clearSolutionTransient,
  setSolutionAndOpenMySolutions,
  SELECTORS,
  CTB_IDS,
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
  verifyHrefContainsAfterUtm,
} from '../helpers/index.mjs';

test.describe('My Solutions on Plugin Install Page - Entitlements Check', () => {

  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
  });

  test.afterAll(async () => {
    await clearSolutionTransient();
  });

  test('PLS plugin has proper attributes', async ({ page }) => {
    const pre = await setSolutionAndOpenMySolutions(page, 'commerce', 'commerce');
    test.skip(!pre.ok, pre.reason);

    await page.waitForLoadState('load');
    const pluginsList = page.locator(SELECTORS.mySolutionsPluginsList);
    await expect(pluginsList).toBeVisible({ timeout: 10000 });

    const advReviewsTitle = page.locator(SELECTORS.pluginCardTitle('advanced-reviews'));
    await expect(advReviewsTitle).toContainText('Advanced Reviews');
    await advReviewsTitle.scrollIntoViewIfNeeded();
    await expect(advReviewsTitle).toBeVisible();

    const advReviewsButton = page.locator(SELECTORS.pluginCardButton('advanced-reviews'));
    await verifyInstallerAttributes(advReviewsButton, {
      basename: 'yith-woocommerce-advanced-reviews-premium/init.php',
      name: 'Advanced Reviews',
      plsSlug: 'yith-woocommerce-advanced-reviews',
      plsProvider: 'yith',
    });
    await verifyHrefContains(advReviewsButton, 'yith_ywar_panel');
    await verifyMissingAttributes(advReviewsButton, [
      'data-nfd-installer-download-url',
      'data-ctb-id',
      'target',
    ]);
  });

  test('Advanced Reviews as premium upgrade for creator', async ({ page }) => {
    const pre = await setSolutionAndOpenMySolutions(page, 'creator', 'creator');
    test.skip(!pre.ok, pre.reason);

    const pluginsList = page.locator(SELECTORS.mySolutionsPluginsList);
    await expect(pluginsList).toBeVisible();

    const upgradeBanner = page.locator(SELECTORS.mySolutionsUpgradeBanner);
    await expect(upgradeBanner).toBeVisible();

    const upgradeButton = page.locator(SELECTORS.mySolutionsUpgradeBannerButton);
    await expect(upgradeButton).toBeVisible();
    await verifyHrefContainsAfterUtm(
      upgradeButton,
      '#click-to-buy-WP_SOLUTION_FAMILY'
    );
    await expect(upgradeButton).toHaveAttribute('data-ctb-id', CTB_IDS.solutionFamily);

    const advReviewsTitle = page.locator(SELECTORS.pluginCardTitle('advanced-reviews'));
    await expect(advReviewsTitle).toContainText('Advanced Reviews');
    await advReviewsTitle.scrollIntoViewIfNeeded();
    await expect(advReviewsTitle).toBeVisible();

    const advReviewsButton = page.locator(SELECTORS.pluginCardButton('advanced-reviews'));
    await verifyMissingAttributes(advReviewsButton, [
      'data-nfd-installer-plugin-activate',
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-nfd-installer-download-url',
      'data-ctb-id',
      'target',
    ]);
    await expect(advReviewsButton).toHaveAttribute('href', '#null');
  });
});
