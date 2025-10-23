import { test as base } from '@playwright/test';
import { AllPages } from './pages/allPages';

type MyFixtures = {
    readonly app: AllPages;
    readonly loggedInApp: AllPages;
};

export const test = base.extend<MyFixtures>({

  app: async ({ page }, use) => {
    const app = new AllPages(page); 
  await use(app);
},
  loggedInApp: async ({ app }, use) => {
    await app.loginPage.goto()
    await app.loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');

  await use(app);
}
});