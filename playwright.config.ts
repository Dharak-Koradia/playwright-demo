import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// ✅ Decide which .env file to load based on the ENV variable
const envFile = process.env.ENV === 'prod' ? '.env.prod' : '.env.staging';

// ✅ Load the variables
dotenv.config({ path: path.resolve(__dirname, envFile) });

// ✅ Optional: Print which environment you’re using
console.log(`🧭 Running tests on: ${process.env.BASE_URL}`);

export default defineConfig({
  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: process.env.BASE_URL || 'https://playwright.dev', // fallback in case .env fails
    headless: true, // or false if you want to see the browser
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
