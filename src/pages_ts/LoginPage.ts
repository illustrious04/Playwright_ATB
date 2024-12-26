import { test, expect, Locator, Page } from '@playwright/test'



export class LoginPage {

   page: Page;
   email_textbox: Locator;
   password_textbox: Locator;
   login_buttom: Locator;

   constructor(page) {
      this.page = page;
      this.email_textbox = page.locator('#userEmail')
      this.password_textbox = page.locator('#userPassword')
      this.login_buttom = page.locator('#login')
   }

   async gotoBrowser() {
      await this.page.goto('https://rahulshettyacademy.com/client')
   }

   async validLogin(email: string, password: string) {
      await this.email_textbox.fill(email)
      await this.password_textbox.fill(password)
      await this.login_buttom.click();
      await this.page.waitForLoadState('networkidle');
   }
}

//module.exports = {LoginPage}