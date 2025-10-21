import { expect } from '@playwright/test';
import { test } from '../fixtures';

const firstProduct = {
    productName: 'Combination Pliers',
    productPrice: '14.15',
  };

const cardCredentials = {
    cardNumber: '1111-1111-1111-1111',
    expirationDate: '01/2026',
    securityCode: '111',
    cardholderName: 'Test User',
}

test.describe.serial('Verify user can add product to cart and buy this product',  () => {      
    
    test.beforeEach(async ({ page, loggedInApp }) => {
        await expect(loggedInApp.page).toHaveURL(/\/account/);
        await page.goto('/');
        await page.getByAltText(firstProduct.productName).click();
      });

    test('Verify that product should be added to the cart', async ({ app, page }) => { 
        await app.productPage.addToCartButton.click()
        await expect(app.productPage.addCartAlert).toBeVisible();
        await expect(app.productPage.addCartAlert).toContainText("Product added to shopping cart");
        await app.productPage.header.cartButton.click();
        await expect(page).toHaveURL(/\/checkout/);
        await expect(app.checkoutPage.productTitle).toHaveText(firstProduct.productName);
        await expect(app.checkoutPage.productPrice).toContainText(firstProduct.productPrice);
        await expect(app.checkoutPage.totalPrice).toContainText(firstProduct.productPrice);
    
        await app.checkoutPage.checkoutButton.click();
        await app.checkoutPage.checkoutButton2.click();
        await expect(app.loginPage.header.navMenu).toContainText('Jane Doe');

        await app.checkoutPage.stateField.fill('USA');
        await app.checkoutPage.postcodeField.fill('12345');
        await app.checkoutPage.checkoutButton3.click();

        await app.checkoutPage.paymentMethodDropdown.selectOption('credit-card');
        await app.checkoutPage.cardNumberField.fill(cardCredentials.cardNumber);
        await app.checkoutPage.expirationDateField.fill(cardCredentials.expirationDate);
        await app.checkoutPage.cvvField.fill(cardCredentials.securityCode);
        await app.checkoutPage.cardholderNameField.fill(cardCredentials.cardholderName);

        await app.checkoutPage.finishButton.click();
        await expect(app.checkoutPage.finishCheckoutMessage).toBeVisible();        
    })

});
