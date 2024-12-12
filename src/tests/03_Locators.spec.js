// This is the another way to import the functions. 1st one is used in HomePage test
import { test, expect } from '@playwright/test';


test('Locators', async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    //Click on Login Button.
    //await page.locator('id=login2').click()
    await page.click('id=login2') //Property
    // Provide username
    //await page.locator('#loginusername').fill('Suyash')
    await page.fill('#loginusername', 'pavanol') //CSS 
    await page.fill('#loginpassword', 'test@123')
    await page.click("//button[normalize-space()='Log in']")
    const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]") //Xpath
    await expect(logoutLink).toBeVisible();
    await page.close();

    const elements = await page.$$(locator)
  
  });
  

 
  
  

  
  
  
  
  
  
   

  


  
  
