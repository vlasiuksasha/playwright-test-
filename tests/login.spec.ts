/* eslint-disable playwright/no-conditional-in-test */
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
  
  if (await page.locator('text=Verify you are human').isVisible({ timeout: 3000 })) {
    console.warn('⚠️ Cloudflare verification page detected. Skipping...');
    test.skip(true, 'Cloudflare challenge appeared — cannot continue test');
  }

  await expect(page).toHaveURL(/\/account/);
  await app.accountPage.verifyLoggedInUser('Jane Doe');
  await expect(app.accountPage.titlePage).toContainText('My account');
});
