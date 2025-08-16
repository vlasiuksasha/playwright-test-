const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login');
});
//add tests for login page
test('Check that site has a title', async ({ page }) => {
    await expect(page).toHaveTitle('Login - Practice Software Testing - Toolshop - v5.0');
  });

test('Fill in the fields on the login page', async ({ page }) => {

    const emailTest = 'customer@practicesoftwaretesting.com'
    const emailField = page.getByTestId('email')
    await expect(emailField).toBeVisible();
    await emailField.fill(emailTest);
    
    const passwordTest = 'welcome01'
    const passwordField = page.getByTestId('password')
    await passwordField.fill(passwordTest);
    await expect(passwordField).toHaveValue(passwordTest);

    const loginButton = page.getByTestId('login-submit');
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled()
    await loginButton.click();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account')
    await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe')
    await expect(page.getByTestId('page-title')).toContainText('My account')
  });