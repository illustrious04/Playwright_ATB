import{test, expect, request} from '@playwright/test'
const {APIUtils} = require('../utils/APIUtils.js')
const loginpayLoad = {userEmail: "suyashguha04@gmail.com", userPassword: "Strong@1234"}
const orderPayload = {orders: [{country: "India", productOrderedId: "6581cade9fd99c85e8ee7ff5"}]}

let token;
let orderid;


//--------------Get Login Token API handle------------
test.beforeAll('LoginAPI', async ()=>{
   const APIContext = await request.newContext();  
   const apiutils = new APIUtils(APIContext, loginpayLoad)
   respose = await apiutils.creteOrder(orderPayload)
})


test('Get all the Titles of the products', async ({page})=>{

    // From API Utils file
    const apiUtils = new APIUtils(APIContext, loginpayLoad)
    const orderId = creteOrder(orderPayload)

//------------- Login API Call-----
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, respose.token );

    //----------Locators-------
    const url = 'https://rahulshettyacademy.com/client'

    await page.goto(url)
    // Dynamically find the order ID in the Order History page.
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator('tbody').waitFor()
    const rows = await page.locator('tbody tr')
    
    for(let i = 0; i < await rows.count(); ++i){
        const rowOrderID = await rows.nth(i).locator('th').textContent()
    
        if(respose.orderid === rowOrderID.trim()){
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