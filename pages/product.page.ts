import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./fragments/HeaderFragment";

export class ProductPage {
    readonly page: Page;
    readonly header: HeaderFragment;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly addToFavoriteButton: Locator;
    readonly addCartAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productName = page.getByTestId("product-name");
        this.productPrice = page.getByTestId("unit-price");
        this.addToCartButton = page.getByTestId("add-to-cart");
        this.addToFavoriteButton = page.getByTestId("add-to-favorites");
        this. addCartAlert = page.getByRole('alert');
    }
};
