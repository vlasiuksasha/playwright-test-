import { expect } from '@playwright/test';
import { test } from '../fixtures';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

const user = {
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
  name: 'Jane Doe'
};

test('Verify successful login', async ({ app, page }) => {
  await app.loginPage.goto()
  await app.loginPage.performLogin(user.email, user.password);

  await expect(page).toHaveURL(/\/account/);

  await page.context().storageState({ path: authFile });
});
