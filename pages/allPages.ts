import { Page } from "@playwright/test";
import { AccountPage } from "./account.page";
import { CheckoutPage } from "./checkout.page";
import { HeaderFragment } from "./fragments/HeaderFragment";
import { HomePage } from "./home.page";
import { LoginPage } from "./login.page";
import { ProductPage } from "./product.page";

export class AllPages {
    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly header: HeaderFragment;
    readonly checkoutPage: CheckoutPage;
    readonly homePage: HomePage;
    readonly accountPage: AccountPage;
    readonly productPage: ProductPage;
  
    constructor(page: Page) {
    this.page = page;
      this.loginPage = new LoginPage(page);
      this.header = new HeaderFragment(page);
      this.checkoutPage = new CheckoutPage(page);
      this.homePage = new HomePage(page);
      this.accountPage = new AccountPage(page);
      this.productPage = new ProductPage(page);
    }
  }
