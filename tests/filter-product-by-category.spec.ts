import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page'; 


test('Verify that products are filtered by category (Sander)', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('/');
    await homePage.filterBySubCategory('Sander')
    const productNames = await homePage.getProductNames();
    for (const name of productNames) {
      expect(name.toLowerCase()).toContain('sander');
    }
  });