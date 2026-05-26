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
  deactivatePluginViaUI,
  clickInstallAndVerifyModal,
  verifyInstallerAttributes,
  verifyMissingAttributes,
  verifyHrefContains,
  SELECTORS,
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

  test('Jetpack plugin installs properly', async ({ page }) => {
    const pre = await setSolutionAndOpenMySolutions(page, 'commerce', 'commerce');
    test.skip(!pre.ok, pre.reason);

    const pluginsList = page.locator(SELECTORS.pluginsListEntitlements);
    await expect(pluginsList).toBeVisible();

    const jetpackTitle = page.locator(SELECTORS.pluginCardTitle('jetpack'));
    await expect(jetpackTitle).toContainText('Jetpack');
    await jetpackTitle.scrollIntoViewIfNeeded();
    await expect(jetpackTitle).toBeVisible();

    const jetpackButton = page.locator(SELECTORS.pluginCardButton('jetpack'));
    await verifyHrefContains(jetpackButton, 'my-jetpack');
    await verifyInstallerAttributes(jetpackButton, {
      name: 'Jetpack',
      downloadUrl: 'https://downloads.wordpress.org/plugin/jetpack.latest-stable.zip',
    });
    await verifyMissingAttributes(jetpackButton, [
      'data-nfd-installer-pls-slug',
      'data-nfd-installer-pls-provider',
    ]);

    await clickInstallAndVerifyModal(page, 'jetpack', 'Jetpack');

    await expect(page).toHaveURL(/jetpack/);

    await verifyPluginInstalled(page, 'jetpack');
    await verifyPluginActive(page, 'jetpack');

    await navigateToMySolutionsTab(page, 'commerce');
    await expectNewfoldSolutionsHydrated(page, 'commerce');

    const jetpackTitleAfter = page.locator(SELECTORS.pluginCardTitle('jetpack'));
    await expect(jetpackTitleAfter).toContainText('Jetpack');
    await jetpackTitleAfter.scrollIntoViewIfNeeded();
    await expect(jetpackTitleAfter).toBeVisible();

    const jetpackButtonAfter = page.locator(SELECTORS.pluginCardButton('jetpack'));
    await expect(jetpackButtonAfter).toHaveAttribute('data-is-active');
    await verifyMissingAttributes(jetpackButtonAfter, ['data-nfd-installer-plugin-url']);
    await verifyHrefContains(jetpackButtonAfter, 'my-jetpack');

    await jetpackButtonAfter.click();
    await expect(page).toHaveURL(/jetpack/);

    await deactivatePluginViaUI(page, 'jetpack');

    await navigateToMySolutionsTab(page, 'commerce');
    await expectNewfoldSolutionsHydrated(page, 'commerce');

    const jetpackButtonInactive = page.locator(SELECTORS.pluginCardButton('jetpack'));
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
