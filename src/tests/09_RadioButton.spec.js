import{test, expect} from '@playwright/test'

test('Handle Radio Button', async ({page})=>{
    const url = "https://testautomationpractice.blogspot.com/"
    await page.goto(url)
    //Enter Name.

    //await page.locator('#male').check()
    await page.check('#male')
    await expect(await page.locator('#male')).toBeChecked()
    await expect(await page.locator('#male').isChecked).toBeTruthy() //Male Radio Button
    await expect(await page.locator('#female').isChecked).toBeFalsy() // Female Radio Button.

    await page.waitForTimeout(5000)
})



