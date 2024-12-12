import{test, expect} from '@playwright/test'

// Playwrite has given the direct way to handle the elements with same locator.
/**
 * To get the first element => .first() Method
 * To get the last element => .nth() method
 * To get any index element => .nth(1) method. 1 means 2nd value.
 */

const URL = 'https://rahulshettyacademy.com/angularpractice/shop'
const URL2= 'https://rahulshettyacademy.com/client/auth/login'

test('Handle Multiple Web elments with same Locator', async({page})=>{
    
    await page.goto(URL);
    //console.log(await page.locator('.card-body a').textContent());
    console.log(await page.locator('.card-body a').first().textContent());
    console.log(await page.locator('.card-body a').nth(1).textContent());

    
})

// How to grab the text of all the products. from the list.

test.only('Handle All the Products', async ({page})=>{
    await page.goto(URL)
    const productTitles = page.locator('.card-body a')
    const allTitles = await productTitles.allTextContents()
    console.log(allTitles)

// allTextContents() will return all the title text its an Array.
})
