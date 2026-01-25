import { test, expect } from '@playwright/test';

test('[Non-UI] Flaky test that might succeed on retry @negative', async ({ page }) => {

    const random = Math.random();
    console.log(`🌀 Random value: ${random}`);

    // Fail 50% of the time on purpose
    expect(random).toBeGreaterThan(0.5);
});
