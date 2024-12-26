
import { LoginPage } from './LoginPage';
//const { DashboardPage } = require('./DashboardPage')
import { DashboardPage } from './DashboardPage';
import { CartPage } from './CartPage';
import { OrderHistoryPage } from './OrdersHistoryPage';
import { OrderReviewPage } from './OrdersReviewPage';
import { Page } from '@playwright/test'




export class POManager {

    loginpage: LoginPage;
    dashboardpage: DashboardPage
    orderHistoryPage: OrderHistoryPage
    OrderReviewPage: OrderReviewPage
    cartpage: CartPage
    page: Page

    constructor(page: Page) {
        this.page = page
        this.loginpage = new LoginPage(this.page);
        this.dashboardpage = new DashboardPage(this.page)
        this.orderHistoryPage = new OrderHistoryPage(this.page)
        this.OrderReviewPage = new OrderReviewPage(this.page)
        this.cartpage = new CartPage(this.page)
    }

    getLoginPage() {
        return this.loginpage
    }

    getDashboardPage() {
        return this.dashboardpage
    }

    getcartpage() {
        return this.cartpage
    }

    getOrderHistoryPage() {
        return this.orderHistoryPage
    }

    getOrderReviewPage() {
        return this.OrderReviewPage
    }

}

//module.exports = { POManager };