const {LoginPage} = require('./LoginPage')
const {DashboardPage} = require('./DashboardPage')



class POManager{
    constructor(page)
    {
        this.page = page
        this.loginpage = new LoginPage(this.page);
        this.dashboardpage = new DashboardPage(this.page)
    }

getLoginPage(){
    return this.loginpage
}

getDashboardPage(){
    return this.dashboardpage
}

}

module.exports = {POManager};