import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';


test('test', async ({ page }) => {
    const Login = new LoginPage(page)
    await Login.openBrowser()
    await Login.login('sc7@techvalens.com', 'test@1234')

});


