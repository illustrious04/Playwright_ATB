import{test, expect} from '@playwright/test'

test('Hard Assertions', async ({page}) =>{

    //Hard Assertions
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('ST')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await expect(page.locator('#nava')).toBeVisible()
})

test.only('Soft Assertions', async ({page})=>{
    //soft Assertions.
    await page.goto('https://www.demoblaze.com/')
    await expect.soft(page).toHaveTitle('ST')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(page.locator('#nava')).toBeVisible()

})

