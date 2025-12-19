import { test, expect } from '@playwright/test';
import {
  auth,
  setSolution,
  clearSolutionTransient,
  navigateToMySolutionsTab,
  SELECTORS,
  CTB_IDS,
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
} from '../helpers/index.mjs';

test.describe('My Solutions on Plugin Install Page - Entitlements Check', () => {

  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
  });

  test.afterAll(async () => {
    await clearSolutionTransient();
  });

  // Check a PLS plugin has correct attributes on button
  // Cannot fully test PLS install here because the site is not hiive registered
  // and the PLS endpoint requires a site and user with solution add-on
  test('PLS plugin has proper attributes', async ({ page }) => {
    await setSolution('commerce');
    await navigateToMySolutionsTab(page, 'commerce');

    // Wait for the app to fully load
    await page.waitForLoadState('networkidle');
    
    // Use first() to select the first plugins card list (there may be multiple)
    const pluginsList = page.locator('.nfd-my-solutions-app-container .nfd-plugins-card-list').first();
    await expect(pluginsList).toBeVisible({ timeout: 10000 });

    // Advanced Reviews is listed - find by text within the plugins list
    const advReviewsCard = pluginsList.locator('.plugin-card-advanced-reviews');
    const advReviewsTitle = advReviewsCard.locator('h2');
    await expect(advReviewsTitle).toContainText('Advanced Reviews');
    await advReviewsTitle.scrollIntoViewIfNeeded();
    await expect(advReviewsTitle).toBeVisible();

    // Test entitlement included in solution with PLS attributes
    const advReviewsButton = advReviewsCard.locator('.button');
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

    // Not testing PLS install - not able to achieve license without hiive connection
  });

  // Test premium entitlement button in upgrade solution section for solution upgrade CTA
  test('Advanced Reviews as premium upgrade for creator', async ({ page }) => {
    await setSolution('creator');
    await navigateToMySolutionsTab(page, 'creator');

    // Use first() to select the first plugins card list (there may be multiple)
    const pluginsList = page.locator('.nfd-my-solutions-app-container .nfd-plugins-card-list').first();
    await expect(pluginsList).toBeVisible();

    // Should have upgrade banner with CTB attributes on CTA button
    const upgradeBanner = page.locator(SELECTORS.mySolutionsUpgradeBanner);
    await expect(upgradeBanner).toBeVisible();

    const upgradeButton = page.locator(SELECTORS.mySolutionsUpgradeBannerButton);
    await expect(upgradeButton).toBeVisible();
    await verifyHrefContains(upgradeButton, '#click-to-buy-WP_SOLUTION_FAMILY');
    await expect(upgradeButton).toHaveAttribute('data-ctb-id', CTB_IDS.solutionFamily);

    // Don't install or click CTB link - tests in CTB module do that already

    // Advanced Reviews is listed - find the card anywhere in the app container
    const advReviewsCard = page.locator('.nfd-my-solutions-app-container .plugin-card-advanced-reviews');
    const advReviewsTitle = advReviewsCard.locator('h2');
    await expect(advReviewsTitle).toContainText('Advanced Reviews');
    await advReviewsTitle.scrollIntoViewIfNeeded();
    await expect(advReviewsTitle).toBeVisible();

    // Test entitlement NOT included in solution (premium upgrade) - no installer attributes
    const advReviewsButton = advReviewsCard.locator('.button');
    await verifyMissingAttributes(advReviewsButton, [
      'data-nfd-installer-plugin-activate',
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-nfd-installer-download-url',
      'data-ctb-id',
      'target',
    ]);
    // Button href ends with #null (full URL may have base prefix)
    const href = await advReviewsButton.getAttribute('href');
    expect(href).toContain('#null');
  });
});

