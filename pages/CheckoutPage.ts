import { Page, expect } from '@playwright/test';
import { testData } from '../utils/testData';

export class CheckoutPage {
  readonly page: Page;

  private readonly CHECKOUT_BUTTON = '[data-test="checkout"]';
  private readonly CHECKOUT_FIRSTNAME_FIELD = '[data-test="firstName"]';
  private readonly CHECKOUT_LASTNAME_FIELD = '[data-test="lastName"]';
  private readonly CHECKOUT_ZIPCODE_FIELD = '[data-test="postalCode"]';
  private readonly CHECKOUT_CONTINUE_BUTTON = '[data-test="continue"]';
  private readonly CHECKOUT_FINISH_BUTTON = '[data-test="finish"]';
  private readonly ORDER_COMPLETE_HEADER = '.complete-header';


  constructor(page: Page) {
    this.page = page;
  }

  async checkout(firstName: string, lastName: string, zip: string) {
    // Checkout button from Cart page
    await this.page.locator(this.CHECKOUT_BUTTON).click();

    await this.page.locator(this.CHECKOUT_FIRSTNAME_FIELD).fill(firstName);
    await this.page.locator(this.CHECKOUT_LASTNAME_FIELD).fill(lastName);
    await this.page.locator(this.CHECKOUT_ZIPCODE_FIELD).fill(zip);

    await this.page.locator(this.CHECKOUT_CONTINUE_BUTTON).click();
    // Finish button on Checkout Overview page
    await this.page.locator(this.CHECKOUT_FINISH_BUTTON).click();
  }

  async verifyOrderComplete() {
    await expect(this.page.locator(this.ORDER_COMPLETE_HEADER)).toHaveText(testData.messages.orderSuccessful);
  }
}
