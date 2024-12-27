const { When, Then, Given } = require('@cucumber/cucumber')
const {expect} = require('@playwright/test')



Given('LOgin into the Ecommerce application with {string} and {string}',{timeout: 10*1000}, async function (email, password) {

const loginpage = this.poManager.getLoginPage();
await loginpage.gotoBrowser()
await loginpage.validLogin(email,password);
  });

  When('Add the item {string} in to cart',async function (productName) {
   
    this.dashboardpage = this.poManager.getDashboardPage();
    await this.dashboardpage.searchProduct(productName)
    await this.dashboardpage.navigateToCart()
  });

  Then('verify that {string} is displayed in the cart.', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardpage = this.poManager.getDashboardPage();
    await this.dashboardpage.searchProduct(productName)
    await this.dashboardpage.navigateToCart()
  });

  // When('Enter valid details and place the order', function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });

  // Then('verify the order is displayed in the order history page.', function () {
  //   // Write code here that turns the phrase above into concrete actions
  //   return 'pending';
  // });

  When('Add the item {string} in to cart',async function (productName) {
   
    this.dashboardpage = this.poManager.getDashboardPage();
    await this.dashboardpage.searchProduct(productName)
    await this.dashboardpage.navigateToCart()
  });

  Then('verify that {string} is displayed in the cart.', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardpage = this.poManager.getDashboardPage();
    await this.dashboardpage.searchProduct(productName)
    await this.dashboardpage.navigateToCart()
  });
 