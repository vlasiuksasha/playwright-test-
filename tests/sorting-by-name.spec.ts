import { expect } from '@playwright/test';
import { test } from '../fixtures';

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
    test(`Verify sorting by name (${order})`, async ({ app, page }) => {
      await page.goto('/');
  
      await app.homePage.sortButton.selectOption(option);
  
      const names = (await app.homePage.productName.allTextContents())
        .map(name => name.trim().toLowerCase());
  
      const sorted = [...names].sort(comparator);
      expect(names).toStrictEqual(sorted);
    });
  }
  