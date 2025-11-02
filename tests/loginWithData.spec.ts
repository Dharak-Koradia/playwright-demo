import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test.describe('Login Tests with Custom Credentials', () => {

  test('Should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginWithCustomCredentials(
      testData.validUser.username,
      testData.validUser.password
    );

    // Example: check dashboard loaded
    await expect(page).toHaveURL(/inventory.html/); // adjust based on your site
  });

  test('Should show error message with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginWithCustomCredentials(
      testData.invalidUser.username,
      testData.invalidUser.password
    );

    const error = await page.locator('[data-test="error"]').textContent();
    expect(error).toContain(testData.messages.loginFailure);
  });

});
