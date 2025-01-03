import { test, expect } from '@playwright/test'
import { POManager } from '../pages_ts/POManager'

import { customtest } from '../utils_ts/test-base'


//JSON --> String --> JS object
// stringify converts JSON to String 
// parse coverts string to JS object.
const dataset = JSON.parse(JSON.stringify(require('../utils/ClientAppLoginPOMTestData.json')))


for (const data of dataset) {
    test(`End 2 End Product purchase flow of ${data.productName}`, async ({ page }) => {

        const poManager = new POManager(page);

        const loginpage = poManager.getLoginPage();
        await loginpage.gotoBrowser()
        await loginpage.validLogin(data.email, data.password);

        const dashboardpage = poManager.getDashboardPage();
        await dashboardpage.searchProduct(data.productName)
        await dashboardpage.navigateToCart()

        //console.log(order_ID)

    })
}

// Test data is Coming from the utils/test-base.js

customtest(`Client App Login with Fixture test data`, async ({ page, testDataForOrder }) => {

    const poManager = new POManager(page);

    const loginpage = poManager.getLoginPage();
    await loginpage.gotoBrowser()
    await loginpage.validLogin(testDataForOrder.email, testDataForOrder.password);

    const dashboardpage = poManager.getDashboardPage();
    await dashboardpage.searchProduct(testDataForOrder.productName)
    await dashboardpage.navigateToCart()

    //console.log(order_ID)

})









