import{test, expect} from '@playwright/test'

test('Assertion Test', async ({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
    // expect(page).toHaveURL()               Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')
    //expect(page).toHaveTitle()             Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    //expect(locator).toBeVisible()          Element is visible
    const logo_element = await page.locator('.header-logo')
    await expect(logo_element).toBeVisible()
    //expect(locator).toBeEnabled()          Control is enabled
    const searchStoreBox_element = await page.locator('#small-searchterms')
    await expect(searchStoreBox_element).toBeEditable()
    //expect(locator).toBeChecked()          Radio/Checkbox is checked
   const male_radio_button = await page.locator('#gender-male')
   male_radio_button.click()
   await expect(male_radio_button).toBeChecked()
   //CheckBox
   const newsletter_checkbox = await page.locator('#Newsletter')
   await expect(newsletter_checkbox).toBeChecked()
   // expect(locator).toHaveAttribute()      Element has attribute
   const register_button = await page.locator('#register-button')
   await expect(register_button).toHaveAttribute('type', 'submit')
   //expect(locator).toHaveText()           Element matches text
   await expect(await page.locator('.page-title h1')).toHaveText('Register')
   await expect(await page.locator("//strong[normalize-space()='Your Personal Details']")).toContainText('Personal')
   //expect(locator).toHaveValue(value)     Input has a value
   const email_input = await page.locator('#Email')
   await email_input.fill('abdsuyash@gmail.com')
   await expect(email_input).toHaveValue('abdsuyash@gmail.com')
   //expect(locator).toHaveCount()         List of elements has given length Very use full for dropdowns.
   const DOB_Options = await page.locator("select[name$='DateOfBirthDay'] option")
   await expect(DOB_Options).toHaveCount(32)



})





