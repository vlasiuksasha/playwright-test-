import { expect } from '@playwright/test';
import { test } from '../fixtures';

test('Verify successful login', async ({ app, loggedInApp }) => {
  await expect(loggedInApp.page).toHaveURL(/\/account/);
  await expect(app.loginPage.header.navMenu).toContainText('Jane Doe');
  await expect(app.accountPage.titlePage).toContainText('My account');
});
