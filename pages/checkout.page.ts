import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./fragments/HeaderFragment";


export class CheckoutPage {
    readonly page: Page;
    readonly header: HeaderFragment;
    readonly tableRow: Locator;
    readonly checkoutButton: Locator;
    readonly productTitle: Locator;


 constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.tableRow = page.locator('tbody tr');
    this.checkoutButton = page.getByTestId('proceed-1');
    this.productTitle = page.getByTestId('product-title');
 };

};