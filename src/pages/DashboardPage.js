class DashboardPage{

    constructor(page)
    {
        this.page = page;
        this.products_card_body = page.locator('.card-body')
        this.productsText = page.locator('.card-body b')
        this.cartButton = page.locator("[routerlink*='cart']")
    }

    async searchProduct(productName)
    {
        
        //await page.locator('.row b').first().waitFor();
        const titles = await this.products_card_body.allTextContents();
        console.log(titles);
        const count = await this.products_card_body.count();

        //Dynamically find the product and add to cart.
        for(let i = 0; i < count; ++i)
        {
            if(await this.products_card_body.nth(i).locator('b').textContent() === productName)
            {
                // Now add to card.
                await this.products_card_body.nth(i).locator('text =  Add To Cart').click()
                break;
            }
        
        }
        
    }

    async navigateToCart()
    {
        await this.cartButton.click()
    }

    async navigateToOrders()
    {
    await this.orders.click();
    }
}

module.exports = {DashboardPage};