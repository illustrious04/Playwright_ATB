import{test, expect} from '@playwright/test'
const{POManager} = require('../pages/POManager')


test('Get all the Titles of the products', async ({page})=>{
//----------Locators-------

const email = 'suyashguha04@gmail.com'
const password = 'Strong@1234'
const productName = 'ZARA COAT 3'

const poManager = new POManager(page);

const loginpage = poManager.getLoginPage();
await loginpage.gotoBrowser()
await loginpage.validLogin(email,password);

const dashboardpage = poManager.getDashboardPage();
await dashboardpage.searchProduct(productName)
await dashboardpage.navigateToCart()

//console.log(order_ID)

})


 

 
 


