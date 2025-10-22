import { Locator, Page } from "@playwright/test";
import { expect } from '@playwright/test'; 
import { HeaderFragment } from "./fragments/HeaderFragment";

export class AccountPage {
    readonly page: Page;
    readonly header: HeaderFragment;
    readonly titlePage: Locator;
    readonly navLocator: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.header = new HeaderFragment(page);
      this.titlePage = page.getByTestId('page-title');
      this.navLocator = this.page.locator('nav');
    }

    async verifyLoggedInUser(expectedName: string): Promise<void> {
      await this.navLocator.waitFor({ state: 'visible', timeout: 20000 });
      await expect(this.navLocator).toContainText(expectedName);
    }

  }


