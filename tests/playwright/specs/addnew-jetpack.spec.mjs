import { test, expect } from '@playwright/test';
import {
  auth,
  newfold,
  setSolution,
  clearSolutionTransient,
  uninstallPlugin,
  navigateToMySolutionsTab,
  verifyPluginInstalled,
  verifyPluginActive,
  deactivatePluginViaUI,
  clickInstallAndVerifyModal,
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
} from '../helpers/index.mjs';

let jetpackSupported = false;
let jetpackSkipMessage = '';

test.describe('My Solutions on Plugin Install Page - Jetpack Plugin', () => {

  test.beforeAll(async () => {
    jetpackSupported = await newfold.supportsJetpack();
    jetpackSkipMessage = await newfold.getSkipMessage('jetpack');
  });

  test.skip(() => !jetpackSupported, jetpackSkipMessage);

  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
    await uninstallPlugin('jetpack');
  });

  test.afterAll(async () => {
    await uninstallPlugin('jetpack');
    await clearSolutionTransient();
  });

  // Test free Jetpack plugin install functions
  test('Jetpack plugin installs properly', async ({ page }) => {
    await setSolution('commerce');
    await navigateToMySolutionsTab(page, 'commerce');

    // Use first() for plugins card list as there may be multiple
    const pluginsList = page.locator('.nfd-plugins-card-list').first();
    await expect(pluginsList).toBeVisible();

    // Jetpack is listed - find the card
    const jetpackCard = page.locator('.plugin-card-jetpack');
    const jetpackTitle = jetpackCard.locator('h2');
    await expect(jetpackTitle).toContainText('Jetpack');
    await jetpackTitle.scrollIntoViewIfNeeded();
    await expect(jetpackTitle).toBeVisible();

    // Jetpack button has proper installer attributes
    const jetpackButton = jetpackCard.locator('.button');
    await verifyHrefContains(jetpackButton, 'my-jetpack');
    await verifyInstallerAttributes(jetpackButton, {
      name: 'Jetpack',
      downloadUrl: 'https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip',
    });
    await verifyMissingAttributes(jetpackButton, [
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
    ]);

    // Install Jetpack
    await clickInstallAndVerifyModal(page, 'jetpack', 'Jetpack');

    // Verify redirect occurred
    await expect(page).toHaveURL(/jetpack/);

    // Verify Jetpack is installed and active
    await verifyPluginInstalled(page, 'jetpack');
    await verifyPluginActive(page, 'jetpack');

    // Check button attributes for active plugin
    await navigateToMySolutionsTab(page, 'commerce');

    // Jetpack is listed - find the card again
    const jetpackCardAfter = page.locator('.plugin-card-jetpack');
    const jetpackTitleAfter = jetpackCardAfter.locator('h2');
    await expect(jetpackTitleAfter).toContainText('Jetpack');
    await jetpackTitleAfter.scrollIntoViewIfNeeded();
    await expect(jetpackTitleAfter).toBeVisible();

    const jetpackButtonAfter = jetpackCardAfter.locator('.button');
    await expect(jetpackButtonAfter).toHaveAttribute('data-is-active');
    await verifyMissingAttributes(jetpackButtonAfter, ['data-nfd-installer-plugin-url']);
    await verifyHrefContains(jetpackButtonAfter, 'my-jetpack');

    // Click button should redirect
    await jetpackButtonAfter.click();
    await expect(page).toHaveURL(/jetpack/);

    // Deactivate plugin
    await deactivatePluginViaUI(page, 'jetpack');

    // Attributes match expectations for installed and inactive plugin
    await navigateToMySolutionsTab(page, 'commerce');

    const jetpackButtonInactive = page.locator('.plugin-card-jetpack .button');
    await verifyInstallerAttributes(jetpackButtonInactive, {
      name: 'Jetpack',
      downloadUrl: 'https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip',
    });
    await verifyHrefContains(jetpackButtonInactive, 'my-jetpack');
    await verifyMissingAttributes(jetpackButtonInactive, [
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
    ]);
  });
});

