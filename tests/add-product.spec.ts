import { test, expect } from '@playwright/test';
import{ ProductPage } from '../pages/product.page';
import { CheckoutPage } from '../pages/checkout.page';



test.describe('Verify user can add product to cart',  () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.getByAltText('Slip Joint Pliers').click();
      });

    test('Verify that product has correct info', async ({ page }) => {
        const productPage = new ProductPage(page);
        await expect(page).toHaveURL(/\/product/);
        await expect(productPage.productName).toHaveText("Slip Joint Pliers");
        await expect(productPage.productPrice).toContainText("9.17");
    });

    test('Verify that product should be added to the cart', async ({ page }) => { 
        const productPage = new ProductPage(page);
        await productPage.addToCartButton.click()
        await expect(productPage.addCartAlert).toBeVisible();
        await expect(productPage.addCartAlert).toContainText("Product added to shopping cart");
        await expect(productPage.addCartAlert).toHaveCount(0, { timeout: 8000 });
        await expect(productPage.header.cartBudge).toContainText("1");
    });

    test('Verify that product info in the cart is correct', async ({ page }) => {
        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);
        await productPage.addToCartButton.click()
        await productPage.header.cartButton.click();
        await expect(page).toHaveURL(/\/checkout/);
        await expect(checkoutPage.tableRow).toHaveCount(1);
        await expect(checkoutPage.productTitle).toHaveText("Slip Joint Pliers");
        await expect(checkoutPage.checkoutButton).toBeVisible();
    })
});
