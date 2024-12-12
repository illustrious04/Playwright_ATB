import{test, expect} from '@playwright/test'

const url = 'https://testautomationpractice.blogspot.com/'

test('Test-1: Using index', async({page})=>{
    await page.goto(url)
    const country_Dropdown_locator = page.locator('#country')

    await country_Dropdown_locator.selectOption({index: 3})
})

test('Test-2: Handle Dropdown Using Text', async ({page})=>{
    await page.goto(url)
    const country_Dropdown_locator = page.locator('#country')
    await country_Dropdown_locator.selectOption('India')
})

test('Test-3: Handle Dropdown Using Label', async ({page})=>{
    await page.goto(url)
    const country_Dropdown_locator = page.locator('#country')
    await country_Dropdown_locator.selectOption({label:'India'})
})

test('Test-4: Assert Total Number of Options in the dropdown', async({page})=>{
    await page.goto(url)
    const country_Dropdown_options = page.locator('#country option')
    const options = await country_Dropdown_options
    await expect(options).toHaveCount(10)
})

test('Test-5: Approch-2 Check Number of options in the dropdown', async({page})=>{
    await page.goto(url)
    const options = await page.$$('#country option')
    console.log("Number of Options",options.length)
    await expect(options.length).toBe(10)


})

test('Test-6: check presence of options/value in the dropdown', async({page})=>{
    await page.goto(url)
    const all_options_text_content = await page.locator('#country').textContent()
    await expect(all_options_text_content.includes('India')).toBeTruthy();
    console.log(all_options_text_content)

})


test('Presence of value in the dropdown using looping.', async ({page})=>{
    await page.goto(url)
    const options = await page.$$('#country option')
    let status = false;
    for(const option of options){
        //console.log(await option.textContent())
        let value = await option.textContent()
        if(value && value.includes('Germany')){
            status = true;
            break;
        }
    }
expect(status).toBeTruthy();
    
})

test('Select options from dropdown using loops.', async ({page})=>{
    await page.goto(url)
    const options = await page.$$('#country option')
    for(const option of options){
        //console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('Germany')){
            await page.selectOption('#country', value)
            break;
        }
    }
    await page.waitForTimeout(5000)
    await page.close()
})