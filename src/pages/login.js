exports.LoginPage = class LoginPage {

    constructor(page){
        this.page = page

        this.email_textbox = page.getByPlaceholder('Registered email *')
        this.password_textbox = page.getByPlaceholder('Password *')
        this.signin_buttom = page.getByRole('button', { name: 'Sign In' })
    }

    async openBrowser(){
       await this.page.goto('https://company.evluate.com/en/company-login');
    }

// Create a login function.

    async login(email, password){
        await this.email_textbox.fill(email)
        await this.password_textbox.fill(password)
        await this.signin_buttom.click()
    }
}

