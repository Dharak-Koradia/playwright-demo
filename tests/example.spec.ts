// tests/example.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('homepage has title and get started link works', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect(page).toHaveTitle(/Playwright/);

  await homePage.clickGetStarted();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
