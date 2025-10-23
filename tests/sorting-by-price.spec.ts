import { expect } from '@playwright/test';
import { test } from '../fixtures';


const sortOptions = [
    {
      option: 'price,asc',
      order: 'asc',
      comparator: (a: number, b: number) => a - b,
    },
    {
      option: 'price,desc',
      order: 'desc',
      comparator: (a: number, b: number) => b - a,
    },
  ];
  
  for (const { option, order, comparator } of sortOptions) {
    test(`Verify sorting by price (${order})`, async ({ page, app }) => {
      await page.goto('/');
  
      await app.homePage.sortButton.selectOption(option);
  
      const prices = (await app.homePage.productPrice.allTextContents())
      .map(priceText => parseFloat(priceText.replace(/[^0-9.]/g, '')));

      const sorted = [...prices].sort(comparator);
      expect(prices).toStrictEqual(sorted);
    });
  }
  