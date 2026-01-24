import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  private readonly INVENTORY_ITEM_BUTTONS = '.inventory_item button';
  private readonly SHOPPING_CART_LINK = '.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async addFirstProductToCart() {
    await this.page.locator(this.INVENTORY_ITEM_BUTTONS).first().click();
  }

  async goToCart() {
    await this.page.locator(this.SHOPPING_CART_LINK).click();
  }

  async verifyInventoryPageLoaded() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}
