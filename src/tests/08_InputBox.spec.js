import{test, expect} from '@playwright/test'

test('Handle Inoput Box', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Enter Name.

    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#name')).toBeEmpty()
    await expect(page.locator('#name')).toBeEditable()
    await expect(page.locator('#name')).toBeEnabled()
    await page.locator('#name').fill('Suyash')
    await page.waitForTimeout(5000)
})