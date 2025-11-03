import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';


// Decide which .env file to load based on the ENV variable
const envFile = process.env.ENV === 'prod' ? '.env.prod' : '.env.staging';

// Load the variables
dotenv.config({ path: path.resolve(__dirname, envFile) });

// Print which environment you’re using
console.log(`From Playwright config file: Running tests on: ${process.env.BASE_URL}`);

export default defineConfig({
  retries: 2, // Retry failed tests up to 2 times

  reporter: [
    ['list'],                      // Console-friendly output while running
    ['html', { open: 'on-failure' }] // Auto-open report if something fails
  ],

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure', // Capture screenshots only when tests fail
    video: 'retain-on-failure',    // Record videos only for failed tests
    trace: 'retain-on-failure',    // Retain trace only when failure happens
    actionTimeout: 10_000,         // Fail any single action after 10s
    navigationTimeout: 15_000,     // Timeout for navigation events
  },
});
