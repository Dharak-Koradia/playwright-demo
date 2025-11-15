import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';


// Load .env file only if running locally (not in CI)
if (!process.env.CI) {
  const envFile = process.env.ENV === 'prod' ? '.env.prod' : '.env.staging';
  dotenv.config({ path: path.resolve(__dirname, envFile) });
  console.log(`I am from Playwright config file -- loaded environment file: ${envFile}`);
} 
else {
  console.log('I am from Playwright config file -- Running in CI — using GitHub Secrets for env variables...');
}

// Print which environment you’re using
console.log(`I am from Playwright config file -- this is the process.env.BASE_URL: ${process.env.BASE_URL}`);

export default defineConfig({
  retries: 2, // Retry failed tests up to 2 times

  reporter: [
    ['list'],                      // Console-friendly output while running
    ['html', { open: 'on-failure' }] // Auto-open report if something fails
  ],

  // Define projects for cross-browser testing
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,                // Default headless mode (use --headed to override)
    screenshot: 'only-on-failure', // Capture screenshots only when tests fail
    video: 'retain-on-failure',    // Record videos only for failed tests
    trace: 'retain-on-failure',    // Retain trace only when failure happens
    actionTimeout: 10_000,         // Fail any single action after 10s
    navigationTimeout: 15_000,     // Timeout for navigation events
  },
});
