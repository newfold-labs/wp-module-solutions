import { test, expect } from '@playwright/test';
import {
  auth,
  setSolution,
  clearSolutionTransient,
  navigateToMySolutionsTab,
  SELECTORS,
} from '../helpers/index.mjs';

test.describe('My Solutions on Plugin Install Page', () => {

  test.beforeEach(async ({ page }) => {
    await auth.loginToWordPress(page);
    await page.goto('/wp-admin/index.php');
  });

  test.afterAll(async () => {
    await clearSolutionTransient();
  });

  test('The brand logo is shown on solutions tab', async ({ page }) => {
    await setSolution('none');
    await navigateToMySolutionsTab(page, 'none');

    // Log solution from window object
    const solution = await page.evaluate(() => window.NewfoldSolutions?.solution);
    console.log(`NewFold solution: ${solution}`);

    const brandLogo = page.locator(SELECTORS.brandLogoSvg);
    await brandLogo.scrollIntoViewIfNeeded();
    await expect(brandLogo).toBeVisible();
  });

  test('My Solution page is rendered with no solution', async ({ page }) => {
    await setSolution('none');
    await navigateToMySolutionsTab(page, 'none');

    // Log solution from window object
    const solution = await page.evaluate(() => window.NewfoldSolutions?.solution);
    console.log(`NewFold solution: ${solution}`);

    const title = page.locator(SELECTORS.addNewAppTitle);
    await expect(title).toContainText('Premium tools available');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
  });

  test('My Solution page is rendered with Commerce solution', async ({ page }) => {
    await setSolution('commerce');
    await navigateToMySolutionsTab(page, 'commerce');

    // Log solution from window object
    const solution = await page.evaluate(() => window.NewfoldSolutions?.solution);
    console.log(`NewFold solution: ${solution}`);

    // Commerce solution with plugins shows "Powerful Plugins Included"
    const title = page.locator(SELECTORS.addNewAppTitle);
    await expect(title).toContainText('Powerful Plugins Included');
    await title.scrollIntoViewIfNeeded();
    await expect(title).toBeVisible();
  });

  test('My Solution page is rendered with Creator solution', async ({ page }) => {
    await setSolution('creator');
    await navigateToMySolutionsTab(page, 'creator');

    // Log solution from window object
    const solution = await page.evaluate(() => window.NewfoldSolutions?.solution);
    console.log(`NewFold solution: ${solution}`);

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
    await setSolution('service');
    await navigateToMySolutionsTab(page, 'service');

    // Log solution from window object
    const solution = await page.evaluate(() => window.NewfoldSolutions?.solution);
    console.log(`NewFold solution: ${solution}`);

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

