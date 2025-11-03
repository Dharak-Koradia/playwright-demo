import { test, expect } from '@playwright/test';

test('[non-UI] flaky test that succeeds on retry', async ({ page }) => {

    const random = Math.random();
    console.log(`🌀 Random value: ${random}`);

    // Fail 50% of the time on purpose
    expect(random).toBeGreaterThan(0.5);
});
