import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('End-to-end purchase flow on SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login();

  await inventoryPage.verifyInventoryPageLoaded();
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.goToCart();

  await checkoutPage.checkout('John', 'Doe', '12345');
  await checkoutPage.verifyOrderComplete();
});
