// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('events');


module.exports = defineConfig({
  //testDir: './src/tests', 
  testDir: './src/pomtests',
  retries:1,
  workers: 2,


  timeout : 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  /*
  use: {
    //trace: 'on-first-retry',
    trace:'retain-on-failure',
    headless: false,
    screenshot:'only-on-failure',

  },
*/


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium Exicution',
      use: 
      { 
        ...devices['Desktop Chrome'],
        //browserName: "chromium",
        headless: false,
        screenshot:'only-on-failure',
        trace: 'off',                 //This is also called as Logs.
        //viewport: {width:720, height:720},
        //...devices['Galaxy Note 3'],
        //ignoreHTTPSErrors:true, // For SSL certification
        //permissions:['geolocations']
        video:'retain-on-failure'

      
      },
    },

    // {
    //   name: 'firefox Exicution',
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



