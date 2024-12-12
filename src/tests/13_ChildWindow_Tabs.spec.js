import{test, expect} from '@playwright/test'

test.skip('Handle Child window', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const blinking_text = page.locator("[href*='qasummit']")
    await blinking_text.click()
})

test('Handle Browser context', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const blinking_text = page.locator("[href*='qasummit']")

    const [page2] = await Promise.all
    ([
        context.waitForEvent('page'),// Listen any new page is open in background
        await blinking_text.click()
    ])
    const text = await page2.locator('.hero_heading').textContent()
    console.log(text)
   
})