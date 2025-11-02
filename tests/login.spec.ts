import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests using Env Variables', () => {
  test('should login using environment variables', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    console.log('Running on:', process.env.BASE_URL);
    console.log('Username:', process.env.USERNAME);

    await loginPage.login();

    // Example expectation (you can adjust)
    await expect(page).toHaveURL(/inventory/);
  });
});
