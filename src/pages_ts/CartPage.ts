
import { test, expect, Locator, Page } from '@playwright/test'

export class CartPage {

    cart: Locator;
    orders: Locator;
    cartProducts: Locator;
    productsText: Locator;
    checkout: Locator;
    page: Page

    constructor(page: Page) {
        this.page = page;
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.cartProducts = page.locator('div li').first()
        this.productsText = page.locator(".card-body b");
        this.checkout = page.locator("text=Checkout");

    }

    async getProductLocator(productName: String) {
        return this.page.locator("h3:has-text('" + productName + "')")

    }

    async VerifyProductIsDisplayed(productName: String) {
        await this.cartProducts.waitFor()
        const bool = await (await this.getProductLocator(productName)).isVisible()
        expect(bool).toBeTruthy();
    }

    async checkoutBtn() {
        await this.checkout.click()
    }


}
module.exports = { CartPage }