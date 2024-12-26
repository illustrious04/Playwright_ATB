
import { test, expect, Locator, Page } from '@playwright/test';


export class OrderHistoryPage {
    page: Page;
    ordersTable: Locator;
    rows: Locator;
    orderdIdDetails: Locator;



    constructor(page: Page) {
        this.page = page
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderdIdDetails = page.locator(".col-text");
    }

    async searchOrderAndSelect(orderId: any) {
        await this.ordersTable.waitFor()

        for (let i = 0; i < await this.rows.count(); ++i) {
            const rowOrderID = await this.rows.nth(i).locator('th').textContent()
            if (rowOrderID && orderId === rowOrderID.trim()) {
                console.log("Order Id Found clicking on the view button.")
                await this.rows.nth(i).locator('button').first().click()
                break;
            }
        }

    }

    async getOrderId() {
        return await this.orderdIdDetails.textContent()
    }
}

//module.exports = {OrderHistoryPage};