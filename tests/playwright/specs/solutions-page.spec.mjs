import { test, expect } from '@playwright/test';
import {
  auth,
  setSolution,
  clearSolutionTransient,
  navigateToSolutionsPage,
  SELECTORS,
  CTB_IDS,
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
} from '../helpers/index.mjs';

const pluginId = process.env.PLUGIN_ID || 'bluehost';

test.describe('Solutions App in plugin', () => {

  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
  });

  test.afterAll(async () => {
    await clearSolutionTransient();
  });

  test('Solutions page displays upgrade for those with no solution', async ({ page }) => {
    await setSolution('none');
    await navigateToSolutionsPage(page, pluginId);

    const title = page.locator(SELECTORS.solutionsPageTitle);
    await expect(title).toContainText('Premium tools available');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();

    const upgradeBanner = page.locator(SELECTORS.upgradeBanner);
    const bannerTitle = upgradeBanner.locator('h2');
    await expect(bannerTitle).toContainText('Upgrade');
    await bannerTitle.scrollIntoViewIfNeeded();
    await expect(bannerTitle).toBeVisible();
  });

  test('Solutions page displays upgrade with CTB atts for those with no solution', async ({ page }) => {
    await setSolution('none');
    await navigateToSolutionsPage(page, pluginId, 'none');

    const title = page.locator(SELECTORS.solutionsPageTitle);
    await expect(title).toContainText('Premium tools available');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();

    const upgradeBanner = page.locator(SELECTORS.upgradeBanner);
    const bannerTitle = upgradeBanner.locator('h2');
    await expect(bannerTitle).toContainText('Upgrade');
    await bannerTitle.scrollIntoViewIfNeeded();
    await expect(bannerTitle).toBeVisible();

    const upgradeButton = page.locator(SELECTORS.upgradeBannerButton);
    await verifyHrefContains(upgradeButton, '#click-to-buy-WP_SOLUTION_FAMILY');
    await expect(upgradeButton).toHaveAttribute('data-ctb-id', CTB_IDS.solutionFamily);
  });

  test('Creator solutions page displays tools with proper button atts', async ({ page }) => {
    await setSolution('creator');
    await navigateToSolutionsPage(page, pluginId, 'creator');

    const title = page.locator(SELECTORS.solutionsPageTitle);
    await expect(title).toContainText('Premium tools available');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();

    // Yoast SEO listed as downloadable plugin
    const yoastTitle = page.locator(SELECTORS.toolCardTitle('yoast-seo'));
    await expect(yoastTitle).toContainText('Yoast SEO');
    await yoastTitle.scrollIntoViewIfNeeded();
    await expect(yoastTitle).toBeVisible();

    const yoastButton = page.locator(SELECTORS.toolCardButton('yoast-seo'));
    await verifyInstallerAttributes(yoastButton, {
      downloadUrl: 'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip',
      basename: 'wordpress-seo/wp-seo.php',
      name: 'Yoast SEO',
    });
    await verifyHrefContains(yoastButton, 'wpseo_dashboard');

    // Advanced Reviews listed (for creator, it's a premium upgrade - no PLS attributes)
    const advReviewsTitle = page.locator(SELECTORS.toolCardTitle('advanced-reviews'));
    await expect(advReviewsTitle).toContainText('Advanced Reviews');
    await advReviewsTitle.scrollIntoViewIfNeeded();
    await expect(advReviewsTitle).toBeVisible();

    const advReviewsButton = page.locator(SELECTORS.toolCardButton('advanced-reviews'));
    await verifyMissingAttributes(advReviewsButton, [
      'data-nfd-installer-plugin-basename',
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-nfd-installer-download-url',
    ]);
    await verifyHrefContains(advReviewsButton, '#click-to-buy-WP_SOLUTION_FAMILY');
    await expect(advReviewsButton).toHaveAttribute('data-ctb-id', CTB_IDS.solutionFamily);
    await expect(advReviewsButton).toHaveAttribute('target', '_blank');

    // Yoast Premium listed as premium tool
    const yoastPremiumTitle = page.locator(SELECTORS.toolCardTitle('yoast-premium'));
    await expect(yoastPremiumTitle).toContainText('Yoast Premium');
    await yoastPremiumTitle.scrollIntoViewIfNeeded();
    await expect(yoastPremiumTitle).toBeVisible();

    const yoastPremiumButton = page.locator(SELECTORS.toolCardButton('yoast-premium'));
    await verifyMissingAttributes(yoastPremiumButton, [
      'data-nfd-installer-plugin-basename',
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-nfd-installer-download-url',
    ]);
    await verifyHrefContains(yoastPremiumButton, 'yoast');
    await expect(yoastPremiumButton).toHaveAttribute('data-ctb-id', CTB_IDS.yoastPremium);
    await expect(yoastPremiumButton).toHaveAttribute('target', '_blank');
  });

  test('Service solutions page displays tools with proper button atts', async ({ page }) => {
    await setSolution('service');
    await navigateToSolutionsPage(page, pluginId, 'service');

    const title = page.locator(SELECTORS.solutionsPageTitle);
    await expect(title).toContainText('Premium tools available');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();

    // Yoast SEO listed as downloadable plugin
    const yoastTitle = page.locator(SELECTORS.toolCardTitle('yoast-seo'));
    await expect(yoastTitle).toContainText('Yoast SEO');
    await yoastTitle.scrollIntoViewIfNeeded();
    await expect(yoastTitle).toBeVisible();

    const yoastButton = page.locator(SELECTORS.toolCardButton('yoast-seo'));
    await verifyInstallerAttributes(yoastButton, {
      downloadUrl: 'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip',
      basename: 'wordpress-seo/wp-seo.php',
      name: 'Yoast SEO',
    });
    await verifyHrefContains(yoastButton, 'wpseo_dashboard');

    // Advanced Reviews listed (for service, it's an entitlement - has PLS attributes)
    const advReviewsTitle = page.locator(SELECTORS.toolCardTitle('advanced-reviews'));
    await expect(advReviewsTitle).toContainText('Advanced Reviews');
    await advReviewsTitle.scrollIntoViewIfNeeded();
    await expect(advReviewsTitle).toBeVisible();

    const advReviewsButton = page.locator(SELECTORS.toolCardButton('advanced-reviews'));
    await verifyInstallerAttributes(advReviewsButton, {
      basename: 'yith-woocommerce-advanced-reviews-premium/init.php',
      name: 'Advanced Reviews',
      plsProvider: 'yith',
      plsSlug: 'yith-woocommerce-advanced-reviews',
    });
    await verifyHrefContains(advReviewsButton, 'yith_ywar_panel');
    await verifyMissingAttributes(advReviewsButton, [
      'data-nfd-installer-download-url',
      'data-ctb-id',
      'target',
    ]);

    // Yoast Premium listed as premium tool with CTB attributes
    const yoastPremiumTitle = page.locator(SELECTORS.toolCardTitle('yoast-premium'));
    await expect(yoastPremiumTitle).toContainText('Yoast Premium');
    await yoastPremiumTitle.scrollIntoViewIfNeeded();
    await expect(yoastPremiumTitle).toBeVisible();

    const yoastPremiumButton = page.locator(SELECTORS.toolCardButton('yoast-premium'));
    await verifyMissingAttributes(yoastPremiumButton, [
      'data-nfd-installer-plugin-basename',
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-nfd-installer-download-url',
    ]);
    await verifyHrefContains(yoastPremiumButton, 'yoast');
    await expect(yoastPremiumButton).toHaveAttribute('data-ctb-id', CTB_IDS.yoastPremium);
    await expect(yoastPremiumButton).toHaveAttribute('target', '_blank');
  });

  test('Commerce solutions page displays tools with proper button atts', async ({ page }) => {
    await setSolution('commerce');
    await navigateToSolutionsPage(page, pluginId, 'commerce');

    const title = page.locator(SELECTORS.solutionsPageTitle);
    await expect(title).toContainText('Premium tools available');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();

    // Wait for the page content to fully load
    await page.waitForLoadState('networkidle');

    // Yoast SEO listed as downloadable plugin
    const yoastCard = page.locator(SELECTORS.toolCard('yoast-seo'));
    await expect(yoastCard).toBeVisible();
    const yoastTitle = yoastCard.locator('h4');
    await expect(yoastTitle).toContainText('Yoast SEO');

    const yoastButton = yoastCard.locator('.nfd-button');
    await verifyInstallerAttributes(yoastButton, {
      downloadUrl: 'https://downloads.wordpress.org/plugin/wordpress-seo.latest-stable.zip',
      basename: 'wordpress-seo/wp-seo.php',
      name: 'Yoast SEO',
    });
    await verifyHrefContains(yoastButton, 'wpseo_dashboard');

    // Advanced Reviews listed (for commerce, it's an entitlement - has PLS attributes)
    const advReviewsCard = page.locator(SELECTORS.toolCard('advanced-reviews'));
    await expect(advReviewsCard).toBeVisible();
    const advReviewsTitle = advReviewsCard.locator('h4');
    await expect(advReviewsTitle).toContainText('Advanced Reviews');

    const advReviewsButton = advReviewsCard.locator('.nfd-button');
    await verifyInstallerAttributes(advReviewsButton, {
      basename: 'yith-woocommerce-advanced-reviews-premium/init.php',
      name: 'Advanced Reviews',
      plsProvider: 'yith',
      plsSlug: 'yith-woocommerce-advanced-reviews',
    });
    await verifyHrefContains(advReviewsButton, 'yith_ywar_panel');
    await verifyMissingAttributes(advReviewsButton, [
      'data-nfd-installer-download-url',
      'data-ctb-id',
      'target',
    ]);

    // Bookings & Appointments listed (commerce entitlement)
    const bookingsCard = page.locator(SELECTORS.toolCard('bookings-appointments'));
    await expect(bookingsCard).toBeVisible();
    const bookingsTitle = bookingsCard.locator('h4');
    await expect(bookingsTitle).toContainText('Bookings');

    const bookingsButton = bookingsCard.locator('.nfd-button');
    await verifyInstallerAttributes(bookingsButton, {
      basename: 'yith-woocommerce-booking-premium/init.php',
      name: 'Bookings & Appointments',
      plsProvider: 'yith',
      plsSlug: 'yith-woocommerce-booking',
    });
    await verifyHrefContains(bookingsButton, 'yith_booking');
    await verifyMissingAttributes(bookingsButton, [
      'data-nfd-installer-download-url',
      'data-ctb-id',
      'target',
    ]);

    // Yoast Premium listed as premium tool with CTB attributes
    const yoastPremiumCard = page.locator(SELECTORS.toolCard('yoast-premium'));
    await expect(yoastPremiumCard).toBeVisible();
    const yoastPremiumTitle = yoastPremiumCard.locator('h4');
    await expect(yoastPremiumTitle).toContainText('Yoast Premium');

    const yoastPremiumButton = yoastPremiumCard.locator('.nfd-button');
    await verifyMissingAttributes(yoastPremiumButton, [
      'data-nfd-installer-plugin-basename',
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
      'data-nfd-installer-download-url',
    ]);
    await verifyHrefContains(yoastPremiumButton, 'yoast');
    await expect(yoastPremiumButton).toHaveAttribute('data-ctb-id', CTB_IDS.yoastPremium);
    await expect(yoastPremiumButton).toHaveAttribute('target', '_blank');
  });
});

