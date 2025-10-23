import { expect } from '@playwright/test';
import { test } from '../fixtures';

const user = {
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
  name: 'Jane Doe'
};

test.skip(process.env.CI, 'Test is skipped in CI due to the Cloudflare protection.');


test('Verify successful login', async ({ page, app }) => {
  await app.loginPage.goto()
  await app.loginPage.performLogin(user.email, user.password);

  await expect(page).toHaveURL(/\/account/);
  await app.accountPage.verifyLoggedInUser('Jane Doe');
  await expect(app.accountPage.titlePage).toContainText('My account');
});
