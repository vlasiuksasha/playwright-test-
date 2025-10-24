import { expect } from '@playwright/test';
import { test } from '../fixtures';

test('Verify that product display on the product page', async ({ page, app }) => {
  const [response1, response2, response3] = await Promise.all([
    page.request.get('https://api.practicesoftwaretesting.com/products?page=1'),
    page.request.get('https://api.practicesoftwaretesting.com/products?page=2'),
    page.request.get('https://api.practicesoftwaretesting.com/products?page=3'),
  ]);

  const data1 = await response1.json();
  const data2 = await response2.json();
  const data3 = await response3.json();

  const combinedData = {
    ...data1,
    data: [...data1.data, ...data2.data, ...data3.data].slice(0, 20),
  };
  await page.route('https://api.practicesoftwaretesting.com/products*', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(combinedData),
    });
  });

  await page.goto('https://practicesoftwaretesting.com/');

  const productCards = page.locator('[data-test="product-name"]');
  await expect(productCards).toHaveCount(20); 
});
