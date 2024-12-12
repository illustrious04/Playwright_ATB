import{test, expect} from '@playwright/test'


test('Blinking Text.', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const blinking_text = page.locator("[href*='qasummit']")
    await expect(blinking_text).toHaveAttribute('class', 'blinkingText')


})