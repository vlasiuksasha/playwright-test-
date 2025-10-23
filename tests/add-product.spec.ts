import { expect } from '@playwright/test';
import { test } from '../fixtures';

test.describe('Verify user can add product to cart',  () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.getByAltText('Slip Joint Pliers').click();
      });

    test('Verify that product has correct info', async ({ app, page }) => {
        await expect(page).toHaveURL(/\/product/);
        await expect(app.productPage.productName).toHaveText("Slip Joint Pliers");
        await expect(app.productPage.productPrice).toContainText("9.17");
    });

    test('Verify that product should be added to the cart', async ({ app }) => { 
        await app.productPage.addToCartButton.click()
        await expect(app.productPage.addCartAlert).toBeVisible();
        await expect(app.productPage.addCartAlert).toContainText("Product added to shopping cart");
        await expect(app.productPage.addCartAlert).toHaveCount(0, { timeout: 8000 });
        await expect(app.productPage.header.cartBudge).toContainText("1");
    });

    test('Verify that product info in the cart is correct', async ({ app, page }) => {
        await app.productPage.addToCartButton.click()
        await app.productPage.header.cartButton.click();
        await expect(page).toHaveURL(/\/checkout/);
        await expect(app.checkoutPage.tableRow).toHaveCount(1);
        await expect(app.checkoutPage.productTitle).toHaveText("Slip Joint Pliers");
        await expect(app.checkoutPage.checkoutButton).toBeVisible();
    })
});
