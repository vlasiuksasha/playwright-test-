import { test as base } from '@playwright/test';
import { AllPages } from './pages/allPages';
import { config } from './env.config';

type MyFixtures = {
    readonly app: AllPages;
    readonly loggedInApp: AllPages;
};

export const test = base.extend<MyFixtures>({

  app: async ({ page }, use) => {
    const app = new AllPages(page); 
    await use(app);
  },

  loggedInApp: async ({ app, request, page }, use) => {
    const resp = await request.post('https://api.practicesoftwaretesting.com/users/login', {
      data: {
        email: 'customer@practicesoftwaretesting.com',
        password: 'welcome01'
      }
    });

    const jsonData = await resp.json();
    const token = jsonData.access_token;

    await page.goto(config.weburl);
    await page.evaluate((token) => {
      localStorage.setItem('auth-token', token);
    }, token);

    await page.goto('https://api.practicesoftwaretesting.com/account');

    await use(app);
  }

});
