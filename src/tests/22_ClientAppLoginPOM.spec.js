import{test, expect} from '@playwright/test'
const{LoginPage} = require('../pages/LoginPage')
const{DashboardPage} = require('../pages/DashboardPage')


test('Get all the Titles of the products', async ({page})=>{
//----------Locators-------

const email = 'suyashguha04@gmail.com'
const password = 'Strong@1234'
const productName = 'ZARA COAT 3'


const loginpage = new LoginPage(page)
await loginpage.gotoBrowser()
await loginpage.validLogin(email,password)
const dashboardpage = new DashboardPage(page)
await dashboardpage.searchProduct(productName)
await dashboardpage.navigateToCart()



 




// Checkout Page: Select Country from Dynamic dropdown.
await page.locator("[placeholder*='Select Country']").pressSequentially('ind',)

const dropdown = page.locator('.ta-results')
await dropdown.waitFor()
const option_count = await dropdown.locator('button').count()

//Iterate inside the dropdown to get the desired option.
for(let i = 0; i < option_count; ++i){
    const text = await dropdown.locator('button').nth(i).textContent()
    console.log(text)

    if(text.trim() === 'India'){
        await dropdown.locator('button').nth(i).click()
        break;
    }
}

// Assert that the email id is visible or not.
expect(page.locator(".user__name [type='text']").first()).toHaveText(email)
await page.locator('.action__submit').click();

await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ')
//  Grab the Order ID and print it in the console.
 const order_ID = await page.locator('.em-spacer-1 .ng-star-inserted').textContent()
 console.log(order_ID)


// Dynamically find the order ID in the Order History page.
await page.locator("button[routerlink*='myorders']").click();
await page.locator('tbody').waitFor()
const rows = await page.locator('tbody tr')

for(let i = 0; i < await rows.count(); ++i){
    const rowOrderID = await rows.nth(i).locator('th').textContent()

    if(order_ID === rowOrderID.trim()){
        console.log("Order Id Found clicking on the view button.")
        await rows.nth(i).locator('button').first().click()
        break;

    }

}

//Order details Page.
// const orderIdDetails = await page.locator('.col-text').textContent()
// expect(order_ID.includes(orderIdDetails)).toBeTruthy()

//await page.pause()
})


 
 //Need to complete this.
 
 



