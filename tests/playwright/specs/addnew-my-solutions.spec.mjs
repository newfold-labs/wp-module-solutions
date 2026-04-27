import { test, expect } from '@playwright/test';
import {
  auth,
  clearSolutionTransient,
  setSolutionAndOpenMySolutions,
  SELECTORS,
} from '../helpers/index.mjs';

test.describe('My Solutions on Plugin Install Page', () => {

  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
  });

  test.afterAll(async () => {
    await clearSolutionTransient();
  });

  test('The brand logo is shown on solutions tab', async ({ page }) => {
    await setSolutionAndOpenMySolutions(page, 'none', 'none');

    const brandLogo = page.locator(SELECTORS.brandLogoSvg);
    await brandLogo.scrollIntoViewIfNeeded();
    await expect(brandLogo).toBeVisible();
  });

  test('My Solution page is rendered with no solution', async ({ page }) => {
    await setSolutionAndOpenMySolutions(page, 'none', 'none');

    const title = page.locator(SELECTORS.addNewAppTitle);
    await expect(title).toContainText('Premium tools available');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
  });

  test('My Solution page is rendered with Commerce solution', async ({ page }) => {
    await setSolutionAndOpenMySolutions(page, 'commerce', 'commerce');

    // Commerce solution with plugins shows "Powerful Plugins Included"
    const title = page.locator(SELECTORS.addNewAppTitle);
    await expect(title).toContainText('Powerful Plugins Included');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
  });

  test('My Solution page is rendered with Creator solution', async ({ page }) => {
    await setSolutionAndOpenMySolutions(page, 'creator', 'creator');

    // Use first() to select the first h1 (there may be multiple due to upgrade banner)
    const title = page.locator('#nfd-add-new-app h1').first();
    await expect(title).toContainText('Powerful Plugins Included');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();

    const upgradeBanner = page.locator(SELECTORS.mySolutionsUpgradeBanner);
    const bannerTitle = upgradeBanner.locator('h2');
    await expect(bannerTitle).toContainText('Upgrade');
    await bannerTitle.scrollIntoViewIfNeeded();
    await expect(bannerTitle).toBeVisible();
  });

  test('My Solution page is rendered with Service solution', async ({ page }) => {
    await setSolutionAndOpenMySolutions(page, 'service', 'service');

    // Use first() to select the first h1 (there may be multiple due to upgrade banner)
    const title = page.locator('#nfd-add-new-app h1').first();
    await expect(title).toContainText('Powerful Plugins Included');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();

    const upgradeBanner = page.locator(SELECTORS.mySolutionsUpgradeBanner);
    const bannerTitle = upgradeBanner.locator('h2');
    await expect(bannerTitle).toContainText('Upgrade');
    await bannerTitle.scrollIntoViewIfNeeded();
    await expect(bannerTitle).toBeVisible();
  });
});

