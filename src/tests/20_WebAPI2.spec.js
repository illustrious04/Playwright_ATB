import{test, expect} from '@playwright/test'

const url = 'https://rahulshettyacademy.com/client'
const email = 'suyashguha04@gmail.com'
const password = 'Strong@1234'
let webContext;

test.beforeAll('Session storage', async ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();


const email_locator = page.locator('#userEmail')
const password_locator = page.locator('#userPassword')
const loginButton = page.locator('#login')

await page.goto(url)
await email_locator.fill(email)
await password_locator.fill(password)
await loginButton.click()
await page.waitForLoadState('networkidle');
await context.storageState({path: 'state.json'})
webContext = await browser.newContext({storageState:'state.json'})
    
})


test('Get all the Titles of the products', async ()=>{

const page = await webContext.newPage();
await page.goto(url)


const products_card_body = page.locator('.card-body')
const product_name = 'ZARA COAT 3'

await page.locator('.row b').first().waitFor();
const titles = await page.locator('.row b').allTextContents();
console.log(titles);
const count = await products_card_body.count();

//Dynamically find the product and add to cart.
for(let i = 0; i < count; ++i){

if(await products_card_body.nth(i).locator('b').textContent() === product_name){
    // Now add to card.
    await products_card_body.nth(i).locator('text =  Add To Cart').click()
    break;
}

}
await page.locator("[routerlink*='cart']").click()

// Assert that the product selected is visible on the Cart page. 
await page.locator('div li').first().waitFor()
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible() // Product is visible on the page.
expect(bool).toBeTruthy()
await page.locator('text=Checkout').click()

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
 
 



