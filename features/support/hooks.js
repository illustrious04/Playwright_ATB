const { Before, After, AfterStep, Status } = require("@cucumber/cucumber");
const playwright = require('playwright');
const{POManager} = require('../../src/pages/POManager');


Before(async function(){
    const browser = await playwright.chromium.launch({headless: false});
    const context = await browser.newContext();
    //this.page = await context.newPage();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);

})

AfterStep(async function(result){

    if(result.status == Status.FAILED){
        await this.page.screenshot({path:'cucumberScreenshot1.png' })
    }
})

After(async function(){
    await this.page.context().browser().close();
    console.log("I am the test to Exicute")
})