import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

const sortOptions = [
    {
      option: 'name,asc',
      order: 'asc',
      comparator: (a: string, b: string) => a.localeCompare(b),
    },
    {
      option: 'name,desc',
      order: 'desc',
      comparator: (a: string, b: string) => b.localeCompare(a),
    },
  ];
  
  
  for (const { option, order, comparator } of sortOptions) {
    test(`Verify sorting by name (${order})`, async ({ page }) => {
      const homePage = new HomePage(page);
      await page.goto('/');
  
      await homePage.sortButton.selectOption(option);
  
      const names = (await homePage.productName.allTextContents())
        .map(name => name.trim().toLowerCase());
  
      const sorted = [...names].sort(comparator);
      expect(names).toStrictEqual(sorted);
    });
  }
  