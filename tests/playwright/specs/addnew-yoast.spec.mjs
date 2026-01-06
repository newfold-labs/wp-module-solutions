import { test, expect } from '@playwright/test';
import {
  auth,
  setSolution,
  clearSolutionTransient,
  uninstallPlugin,
  navigateToMySolutionsTab,
  verifyPluginInstalled,
  verifyPluginActive,
  clickInstallAndVerifyModal,
  CTB_IDS,
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
} from '../helpers/index.mjs';

test.describe('My Solutions on Plugin Install Page - Yoast Check', () => {

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
    await setSolution('creator');
    // Note: Yoast is already uninstalled in beforeEach via wp-cli
    await navigateToMySolutionsTab(page, 'creator');

    // Use first() to select the first plugins card list (there may be multiple)
    const pluginsList = page.locator('.nfd-my-solutions-app-container .nfd-plugins-card-list').first();
    await expect(pluginsList).toBeVisible();

    // Yoast is listed - find by text within the plugins list
    const yoastCard = page.locator('.plugin-card-yoast-seo');
    const yoastTitle = yoastCard.locator('h2');
    await yoastTitle.scrollIntoViewIfNeeded();
    await expect(yoastTitle).toContainText('Yoast SEO');
    await expect(yoastTitle).toBeVisible();

    // Test free entitlement with download attributes
    const yoastButton = yoastCard.locator('.button');
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

    // Install Yoast
    await clickInstallAndVerifyModal(page, 'yoast-seo', 'Yoast');

    // Verify redirect occurred
    await expect(page).toHaveURL(/wpseo_dashboard/);

    // Verify wordpress-seo is installed and active
    await verifyPluginInstalled(page, 'wordpress-seo');
    await verifyPluginActive(page, 'wordpress-seo');

    // Return to entitlements list to verify installed attributes are in place
    await navigateToMySolutionsTab(page, 'creator');

    const yoastButtonAfter = page.locator('.plugin-card-yoast-seo .button');
    await expect(yoastButtonAfter).toHaveAttribute('data-is-active', 'true');
    await verifyHrefContains(yoastButtonAfter, 'wpseo_dashboard');
  });

  // Test premium Yoast premium plugin CTB attributes
  test('Yoast Premium plugin has CTB attributes', async ({ page }) => {
    await setSolution('commerce');
    await navigateToMySolutionsTab(page, 'commerce');

    // Use first() to select the first plugins card list (there may be multiple)
    const pluginsList = page.locator('.nfd-my-solutions-app-container .nfd-plugins-card-list').first();
    await expect(pluginsList).toBeVisible();

    // Yoast Premium is listed - find by text
    const yoastPremiumCard = page.locator('.plugin-card-yoast-premium');
    const yoastPremiumTitle = yoastPremiumCard.locator('h2');
    await yoastPremiumTitle.scrollIntoViewIfNeeded();
    await expect(yoastPremiumTitle).toContainText('Yoast Premium');
    await expect(yoastPremiumTitle).toBeVisible();

    // CTB premium has CTB attributes (standalone premium tool: Yoast Premium)
    const yoastPremiumButton = yoastPremiumCard.locator('.button');
    await verifyMissingAttributes(yoastPremiumButton, [
      'data-nfd-installer-plugin-name',
      'data-nfd-installer-download-url',
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
    ]);
    await expect(yoastPremiumButton).toHaveAttribute('data-ctb-id', CTB_IDS.yoastPremium);
    await expect(yoastPremiumButton).toHaveAttribute('target', '_blank');

    // CTB fallback href
    await verifyHrefContains(yoastPremiumButton, 'yoast.com');

    // Don't install or click CTB link - tests in CTB module do that already
  });

  test('Yoast SEO available for creator', async ({ page }) => {
    await setSolution('creator');
    await navigateToMySolutionsTab(page, 'creator');

    // Use first() to select the first plugins card list (there may be multiple)
    const pluginsList = page.locator('.nfd-my-solutions-app-container .nfd-plugins-card-list').first();
    await expect(pluginsList).toBeVisible();

    // Yoast SEO listed as downloadable plugin
    const yoastButton = page.locator('.plugin-card-yoast-seo .button');
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

