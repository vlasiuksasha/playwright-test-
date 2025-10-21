import { expect } from '@playwright/test';
import { test } from '../fixtures';

const user = {
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
  name: 'Jane Doe'
};


test('Verify successful login', async ({ page, app }) => {
  await app.loginPage.goto()
  await app.loginPage.performLogin(user.email, user.password);

  await expect(page).toHaveURL(/\/account/);
  await expect(app.loginPage.header.navMenu).toContainText('Jane Doe');
  await expect(app.accountPage.titlePage).toContainText('My account');
});
