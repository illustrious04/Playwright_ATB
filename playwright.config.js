// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './src/tests', 

  timeout : 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  use: {
    //trace: 'on-first-retry',
    trace:'retain-on-failure',
    headless: false,
    screenshot:'on',

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },


  ],

});

  // /* Run tests in files in parallel */
  // fullyParallel: false,

  // forbidOnly: !!process.env.CI,
  // /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,

  // workers: process.env.CI ? 1 : undefined,