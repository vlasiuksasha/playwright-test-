import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import path from 'path';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');


const user = {
  email: 'customer@practicesoftwaretesting.com',
  password: 'welcome01',
  name: 'Jane Doe'
};

test('Verify successful login', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  await loginPage.goto()
  await loginPage.performLogin(user.email, user.password);

  await expect(page).toHaveURL(/\/account/);

  await page.context().storageState({ path: authFile });

});
