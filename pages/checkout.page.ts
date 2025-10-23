import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./fragments/HeaderFragment";


export class CheckoutPage {
    readonly page: Page;
    readonly header: HeaderFragment;
    readonly tableRow: Locator;
    readonly checkoutButton: Locator;
    readonly productTitle: Locator;
    readonly productPrice: Locator;
    readonly totalPrice: Locator;
    readonly checkoutButton2: Locator;
    readonly checkoutButton3: Locator;
    readonly stateField: Locator;
    readonly postcodeField: Locator;
    readonly paymentMethodDropdown: Locator;
    readonly cardNumberField: Locator;
    readonly expirationDateField: Locator;
    readonly cvvField: Locator;
    readonly cardholderNameField: Locator;
    readonly finishButton: Locator;
    readonly finishCheckoutMessage: Locator;


 constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
    this.tableRow = page.locator('tbody tr');
    this.checkoutButton = page.getByTestId('proceed-1');
    this.checkoutButton2 = page.getByTestId('proceed-2');
    this.checkoutButton3 = page.getByTestId('proceed-3');
    this.productTitle = page.getByTestId('product-title');
    this.productPrice = page.getByTestId('product-price');
    this.totalPrice = page.getByTestId('line-price');
    this.stateField = page.getByTestId('state');
    this.postcodeField = page.getByTestId('postal_code');
    this.paymentMethodDropdown = page.getByTestId('payment-method');
    this.cardNumberField = page.getByTestId('credit_card_number');
    this.expirationDateField = page.getByTestId('expiration_date');
    this.cvvField = page.getByTestId('cvv');
    this.cardholderNameField = page.getByTestId('card_holder_name');
    this.finishButton = page.getByTestId('finish');
    this.finishCheckoutMessage = page.getByTestId('payment-success-message');
 };

};