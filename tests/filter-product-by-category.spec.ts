import { expect } from '@playwright/test';
import { test } from '../fixtures';


test('Verify that products are filtered by category (Sander)', async ({ page, app }) => {
    await page.goto('/');
    await app.homePage.filterBySubCategory('Sander')
    const productNames = await app.homePage.getProductNames();
    for (const name of productNames) {
      expect(name.toLowerCase()).toContain('sander');
    }
  });