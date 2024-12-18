const {test, expect} = require('@playwright/test');

class CartPage{
    constructor(page){
        this.page = page;
        this.cart =  page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.cartProducts = page.locator('div li').first()
        this.productsText = page.locator(".card-body b");
        this.checkout = page.locator("text=Checkout");
        
    }

    async getProductLocator(productName)
    {
        return this.page.locator("h3:has-text('"+productName+"')")

    }

    async VerifyProductIsDisplayed(productName)
    {
        await this.cartProducts.waitFor()
        const bool = await this.getProductLocator(productName).isVisible()
        expect(bool).toBeTruthy();
    }

    async checkout(){
       await this.checkout.click()
    }


}
module.exports = {CartPage}