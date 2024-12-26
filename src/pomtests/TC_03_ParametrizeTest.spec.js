import{test, expect} from '@playwright/test'
const{POManager} = require('../pages/POManager')
const {customtest} = require('../utils/test-base')
//JSON --> String --> JS object
// stringify converts JSON to String 
// parse coverts string to JS object.
const dataset = JSON.parse(JSON.stringify(require('../utils/ClientAppLoginPOMTestData.json'))) 

test.describe.configure({mode:"parallel"})
for(const data of dataset)
{
test(`End 2 End Product purchase flow of ${data.productName}`, async ({page})=>{

const poManager = new POManager(page);

const loginpage = poManager.getLoginPage();
await loginpage.gotoBrowser()
await loginpage.validLogin(data.email,data.password);

const dashboardpage = poManager.getDashboardPage();
await dashboardpage.searchProduct(data.productName)
await dashboardpage.navigateToCart()

const cartpage = poManager.getCartPage();
await cartpage.VerifyProductIsDisplayed(data.productName)
await cartpage.checkout();

const orderReviewPage = poManager.getOrderReviewPage();
await orderReviewPage.searchCountryAndSelect("ind","India");
const orderID = await orderReviewPage.SubmitAndGetOrderId()
console.log(orderID)

})
}

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



 

 
 


