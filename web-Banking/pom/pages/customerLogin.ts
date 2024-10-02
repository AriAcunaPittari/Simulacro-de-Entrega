import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class loginCustomer {
  page: Page;
  goToLogin: Locator;
  userSelect: Locator;
  loginBtn: Locator;
  verifyLabelCustomer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToLogin = this.page.getByRole('button', { name: 'Customer Login' });
    this.userSelect = this.page.locator('#userSelect');
    this.loginBtn = this.page.getByRole('button', { name: 'Login' });
    this.verifyLabelCustomer = this.page.getByText('Ariana Testing');
}
  async login() {
    if(await this.loginBtn.isHidden){
        await this.goToLogin.click();
        await this.userSelect.selectOption("6");
        await this.loginBtn.click();
    }else{
        await this.loginBtn.click();
    }
    await expect(this.verifyLabelCustomer).toHaveText("Ariana Testing")
  }
}
