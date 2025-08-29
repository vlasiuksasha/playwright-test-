import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./fragments/HeaderFragment";

export class HomePage {
    readonly page: Page;
    readonly header: HeaderFragment;
     productName: Locator;
     productPrice: Locator;


    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productName = page.getByTestId("product-name");
        this.productPrice = page.getByTestId("unit-price");
    }

    async goto(): Promise<void> {
        await this.page.goto("/"); 
      }
}
