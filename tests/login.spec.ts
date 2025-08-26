import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';

test('Fill in the fields on the login page', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  const accountPage = new AccountPage(page);
  await loginPage.goto()
  await loginPage.performLogin(
    'customer@practicesoftwaretesting.com',
    'welcome01'
  );

  await expect(page).toHaveURL(/\/account/);
  await expect(loginPage.header.navMenu).toContainText('Jane Doe');
  await expect(accountPage.titlePage).toContainText('My account');
});
