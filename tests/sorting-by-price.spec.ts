import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

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
    test(`Verify sorting by price (${order})`, async ({ page }) => {
      const homePage = new HomePage(page);
      await page.goto('/');
  
      await homePage.sortButton.selectOption(option);
  
      const prices = (await homePage.productPrice.allTextContents())
      .map(priceText => parseFloat(priceText.replace(/[^0-9.]/g, '')));

      const sorted = [...prices].sort(comparator);
      expect(prices).toStrictEqual(sorted);
    });
  }
  