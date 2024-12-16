import{test, expect} from '@playwright/test'

test('Handle iFrame', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const framePage = page.frameLocator('#courses-iframe')
    await framePage.locator("li a[href$='lifetime-access']:visible").click()
    const textCheck = await framePage.locator('.text h2').textContent()
    console.log(textCheck.split(" ")[1]);

})