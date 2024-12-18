import{test, expect} from '@playwright/test'

test('Popup Validation', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // await page.goto('https://www.google.com/')
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

})

test.only('ScreenShot & Visual Comparison', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await page.screenshot({path:'screenshot.png'})
    await expect(page.locator('#displayed-text')).toBeHidden();

})