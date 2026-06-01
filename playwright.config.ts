import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: 'https://stag-efiling.grogov.us/',
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: null,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});