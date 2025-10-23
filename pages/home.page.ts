import { Locator, Page } from "@playwright/test";
import { HeaderFragment } from "./fragments/HeaderFragment";
export class HomePage {
    readonly page: Page;
    readonly header: HeaderFragment;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly sortButton: Locator;
    readonly sortNameAsc: Locator;
    readonly sortNameDes: Locator;
    readonly sanderCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productName = page.getByTestId("product-name");
        this.productPrice = page.getByTestId("unit-price");
        this.sortButton = page.getByTestId("sort");
        this.sortNameAsc = page.locator('[value="name,asc"]');
        this.sortNameDes = page.locator('[value="name,desc"]');
        this.sanderCheckbox = this.page.getByRole('checkbox', { name: 'Sander' });
      

    }

    async goto(): Promise<void> {
        await this.page.goto("/"); 
      }

      async filterBySubCategory(name: string) {
        const categoryGroup = this.page.getByRole('group', { name: 'Categories' });
        await categoryGroup.getByLabel(name).check();
      }
    

    async getProductNames(): Promise<string[]> {
        return (await this.productName.allTextContents())
          .map(name => name.trim());
      }

      async checkAndWaitforResponse(): Promise<void> {
        const checkboxID = await this.sanderCheckbox.getAttribute('value');

        const responsePromise = this.page.waitForResponse(res =>
            res.url().includes(`by_category=${checkboxID}`));
        await this.sanderCheckbox.check();
        await responsePromise;
    }

    async getAllTextContents(locator:Locator): Promise<string[]> {
        
      return locator.allTextContents();
  }   
  }
