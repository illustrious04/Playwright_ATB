import{expect} from '@playwright/test'
const{POManager} = require('../pages/POManager')
const {customtest} = require('../utils/test-base')



customtest(`Client App Login with Fixture test data`, async ({page, testDataForOrder})=>{

const poManager = new POManager(page);

const loginpage = poManager.getLoginPage();
await loginpage.gotoBrowser()
await loginpage.validLogin(testDataForOrder.email,testDataForOrder.password);

const dashboardpage = poManager.getDashboardPage();
await dashboardpage.searchProduct(testDataForOrder.productName)
await dashboardpage.navigateToCart()

//console.log(order_ID)

})