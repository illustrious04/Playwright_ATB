import{test, expect} from '@playwright/test'
const{POManager} = require('../pages/POManager')

//JSON --> String --> JS object
// stringify converts JSON to String 
// parse coverts string to JS object.
const dataset = JSON.parse(JSON.stringify(require('../utils/ClientAppLoginPOMTestData.json')))

test(`End 2 End Product purchase flow of`, async ({page})=>{

const poManager = new POManager(page);

const loginpage = poManager.getLoginPage();
await loginpage.gotoBrowser();
await loginpage.validLogin(dataset.email, dataset.password);

const dashboardpage = poManager.getDashboardPage();
await dashboardpage.searchProduct(dataset.productName);
await dashboardpage.navigateToCart();
await page.pause();

})
