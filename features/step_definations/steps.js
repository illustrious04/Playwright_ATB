const { When, Then, Given } = require('@cucumber/cucumber')
const{POManager} = require('../../src/pages/POManager')
const {test, expect, playwright} = require('@playwright/test')

Given('LOgin into the Ecommerce application with {email} and {password}', async function (string, string2) {
const browser = await playwright.chrominum.launch();
const context = await browser.newContext();
const page = await context.newPage();
 this.poManager = new POManager(page);
const loginpage = poManager.getLoginPage();
await loginpage.gotoBrowser()
await loginpage.validLogin(data.email,data.password);
  });

  When('Add the item {string} in to cart',async function (string) {
   
    const dashboardpage = this.poManager.getDashboardPage();
    await dashboardpage.searchProduct(data.productName)
    await dashboardpage.navigateToCart()
  });

  Then('verify that {string} is displayed in the cart.', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    const dashboardpage = poManager.getDashboardPage();
    await dashboardpage.searchProduct(data.productName)
    await dashboardpage.navigateToCart()
  });

  // When('Enter valid details and place the order', function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });

  // Then('verify the order is displayed in the order history page.', function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });