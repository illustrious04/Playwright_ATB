import{test, expect} from '@playwright/test'
const{POManager} = require('../pages/POManager')

let productName = "ADIDAS ORIGINAL"

test(`End 2 End Product purchase flow of`, async ({page})=>{

const poManager = new POManager(page);

const loginpage = poManager.getLoginPage();
await loginpage.gotoBrowser()
await loginpage.validLogin("suyashguha04@gmail.com", "Strong@1234");

const dashboardpage = poManager.getDashboardPage();
await dashboardpage.searchProduct(productName)
await dashboardpage.navigateToCart()
await page.pause();

})







 

 
 


