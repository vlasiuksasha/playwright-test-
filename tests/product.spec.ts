import { expect } from '@playwright/test';
import { test } from '../fixtures';


test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByAltText("Combination Pliers").click();
  await expect(page).toHaveURL(/\/product/);
});

test('Product name is correct', async ({ app }) => {
  await expect(app.homePage.productName).toHaveText("Combination Pliers");
});

test('Product price is correct', async ({ app }) => {
  await expect(app.homePage.productPrice).toContainText("14.15");
});

test('Buttons are visible', async ({ page }) => {
  await expect(page.getByTestId("add-to-cart")).toBeVisible();
  await expect(page.getByTestId("add-to-favorites")).toBeVisible();
});
