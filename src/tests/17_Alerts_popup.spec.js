import{test, expect} from '@playwright/test'

test('Handle Alerts Popup', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.pause()
    page.on('dialog', dialog => dialog.accept());  //Dailog Handler
    await page.locator('#confirmbtn').click()      // Event
})


test.only('Handle Normal alert', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message).toContain('I am an alert box!')
        await dialog.accept();
    })
    await page.locator("//button[@id='alertBtn']").click();
})