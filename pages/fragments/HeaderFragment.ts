import { Locator, Page } from "@playwright/test";

export class HeaderFragment {
    page: Page;
    navMenu: Locator;
    signInButton: Locator;
    homeButton: Locator;
    contactButton: Locator;


 constructor(page: Page) {
    this.page = page;
    this.navMenu = page.getByLabel("Main menu");
    this.signInButton = page.getByTestId("nav-sign-in");
    this.homeButton = page.getByTestId("nav-home");
    this.contactButton = page.getByTestId("nav-contact");
 }

 async openLoginPage() {
    await this.signInButton.click();
  }

 async openHomePage() {
    await this.homeButton.click();
  }

 async openContactPage() {
    await this.contactButton.click();
  }

}