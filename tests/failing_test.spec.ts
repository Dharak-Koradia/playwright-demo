import { test, expect } from '@playwright/test';

test('Intentional failure demo', async ({ page }) => {
    // use config file baseURL
    await page.goto('/');
    await expect(page).toHaveTitle(/NonExistentTitle/); // This will fail
});
