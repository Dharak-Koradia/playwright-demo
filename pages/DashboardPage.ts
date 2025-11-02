import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly appLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_list');
    this.appLogo = page.locator('.app_logo');
  }

  async isLoaded() {
    await this.inventoryContainer.waitFor();
    return this.appLogo.isVisible();
  }
}
