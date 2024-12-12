// Locating Multiple Web Elements:

import {test, expect} from '@playwright/test'

test('Capture all the links present on a web page', async ({page})=>{
    await page.goto('https://demoblaze.com/');

    //Capture All the links of a web page and store in a variable.
    const links = await page.$$('a')
    //For Loop to extract the text from each link. 
    for(const eachLink of links ){
      const linkText =   await eachLink.textContent();  //textContent() will return the text of the element.
      console.log(linkText)
    }
    
})

test.only("Capture all the products present on the page.",async ({page})=>{

    await page.goto('https://demoblaze.com/')
    //capture all the products of the home page.
    //page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

  for(const product of products){
    const productName = product.textContent()
    console.log(productName)
  }

})


