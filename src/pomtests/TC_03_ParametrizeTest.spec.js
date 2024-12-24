import{test, expect} from '@playwright/test'
const{POManager} = require('../pages/POManager')

//JSON --> String --> JS object
// stringify converts JSON to String 
// parse coverts string to JS object.
const dataset = JSON.parse(JSON.stringify(require('../utils/ClientAppLoginPOMTestData.json'))) 

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

//console.log(order_ID)

})
}






 

 
 


