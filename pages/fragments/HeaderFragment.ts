import { Locator, Page } from "@playwright/test";

export class HeaderFragment {
    readonly page: Page;
    readonly navMenu: Locator;
    readonly signInButton: Locator;
    readonly homeButton: Locator;
    readonly contactButton: Locator;
    readonly cartButton: Locator;
    readonly cartBudge: Locator;


 constructor(page: Page) {
    this.page = page;
    this.navMenu = page.getByLabel("Main menu");
    this.signInButton = page.getByTestId("nav-sign-in");
    this.homeButton = page.getByTestId("nav-home");
    this.contactButton = page.getByTestId("nav-contact");
    this.cartButton = page.getByTestId("nav-cart");
    this.cartBudge = page.getByTestId("cart-quantity");
 }

 async openLoginPage(): Promise<void> {
    await this.signInButton.click();
  }

 async openHomePage(): Promise<void> {
    await this.homeButton.click();
  }

 async openContactPage(): Promise<void> {
    await this.contactButton.click();
  }

}