import { expect } from '@playwright/test';
import { test } from '../fixtures';

enum PowerTools {
  Grinder = 'Grinder',
  Sander = 'Sander',
  Saw = 'Saw',
  Drill = 'Drill',
}


test('Verify that products are filtered by category (Sander)', async ({ page, app }) => {
    await page.goto('/');
    await app.homePage.checkAndWaitforResponse();

    const productNames = await app.homePage.getAllTextContents(app.homePage.productName);
    for (const i of productNames) {
      expect(i).toContain(PowerTools.Sander);
    }
  });