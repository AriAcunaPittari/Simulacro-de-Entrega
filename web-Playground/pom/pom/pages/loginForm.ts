import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";


export class loginForm {
    page: Page;
    goToLogin: Locator;
    usernameInput: Locator;
    passwordInput: Locator
    loginBtn: Locator;
    loginSuccess: Locator;
    logOutBtn:Locator;

    
    constructor (page:Page){
        this.page = page;
        this.goToLogin = this.page.getByRole('link', { name: 'Login Form A typical login' });
        this.usernameInput = this.page.getByLabel('Username');
        this.passwordInput = this.page.getByLabel('Password');
        this.loginBtn = this.page.getByTestId('login-button');
        this.loginSuccess = this.page.getByText('You are currently logged in!');
        this.logOutBtn = this.page.getByTestId('logout-button');
    }
    async Login (){
        await this.goToLogin.click();
        await this.usernameInput.fill("admin");
        await this.passwordInput.fill("Passw0rd!");
        await this.loginBtn.click();
        await expect(this.loginSuccess).toBeVisible();
    }
    async LogOut(){
        await this.logOutBtn.click();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
    }
}