import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./fragments/HeaderFragment";

export class AccountPage {
    readonly page: Page;
    readonly header: HeaderFragment;
    readonly titlePage: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.header = new HeaderFragment(page);
      this.titlePage = page.getByTestId('page-title');
    }
  }


