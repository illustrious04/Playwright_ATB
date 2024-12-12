import{test, expect} from '@playwright/test'


test('Get all the Titles of the products', async ({page})=>{
const url = 'https://rahulshettyacademy.com/client'
const email = 'suyashguha04@gmail.com'
const password = 'Strong@1234'
const email_locator = page.locator('#userEmail')
const password_locator = page.locator('#userPassword')
const loginButton = page.locator('#login')

await page.goto(url)
await email_locator.fill(email)
await password_locator.fill(password)
await loginButton.click()
//await page.waitForLoadState('networkidle');
await page.locator('.row b').first().waitFor();
const titles = await page.locator('.row b').allTextContents();
console.log(titles);

})