import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';

const user = {
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
  name: 'Jane Doe'
};


test('Verify successful login', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  const accountPage = new AccountPage(page);
  await loginPage.goto()
  await loginPage.performLogin(user.email, user.password);

  await expect(page).toHaveURL(/\/account/);
  await expect(loginPage.header.navMenu).toContainText('Jane Doe');
  await expect(accountPage.titlePage).toContainText('My account');
});
