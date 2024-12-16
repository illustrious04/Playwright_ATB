import{test, expect} from '@playwright/test'

test('Handle Alerts Popup', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.pause()
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click()
})