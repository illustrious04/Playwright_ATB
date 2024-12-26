const {LoginPage} = require('./LoginPage')
const {DashboardPage} = require('./DashboardPage')
const {CartPage} = require('./CartPage')
const {OrderReviewPage} = require('./OrdersReviewPage')
const {OrderHistoryPage} = require('./OrdersHistoryPage')



class POManager{
    constructor(page)
    {
        this.page = page
        this.loginpage = new LoginPage(this.page);
        this.dashboardpage = new DashboardPage(this.page)
        this.cartpage = new CartPage(this.page)
        this.orderReviewPage = new OrderReviewPage(this.page)
        this.orderHistoryPage = new OrderHistoryPage(this.page)
    }

getLoginPage(){
    return this.loginpage
}

getDashboardPage(){
    return this.dashboardpage
}

getCartPage(){
    return this.cartpage
}

getOrderReviewPage(){
    return this.orderReviewPage
}

getOrderHistoryPage(){
    return this.orderHistoryPage
}

}
module.exports = {POManager};