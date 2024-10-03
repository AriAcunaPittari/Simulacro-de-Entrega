import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class loginCustomer {
  page: Page;
  goToLogin: Locator;
  userSelect: Locator;
  loginBtn: Locator;
  verifyLabelCustomer: Locator;
  goToDeposit: Locator;
  inputAmountDeposit: Locator;
  depositBtn: Locator;
  alertSuccesDeposit: Locator;
  goToWithdrawl: Locator;
  withdrawlBtn: Locator;
  inputWithdrawl: Locator;
  alertSuccessWithdrawl: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToLogin = this.page.getByRole('button', { name: 'Customer Login' });
    this.userSelect = this.page.locator('#userSelect');
    this.loginBtn = this.page.getByRole('button', { name: 'Login' });
    this.verifyLabelCustomer = this.page.getByText('Ariana Testing');
    this.goToDeposit = this.page.getByRole('button', { name: 'Deposit' });
    this.inputAmountDeposit = this.page.getByPlaceholder('amount');
    this.depositBtn = this.page.getByRole('form').getByRole('button', { name: 'Deposit' });
    this.alertSuccesDeposit = this.page.getByText('Deposit Successful');
    this.goToWithdrawl = this.page.getByRole('button', { name: 'Withdrawl' });
    this.withdrawlBtn = this.page.getByRole('button', { name: 'Withdraw', exact: true });
    this.inputWithdrawl = this.page.getByPlaceholder('amount');
    this.alertSuccessWithdrawl = this.page.getByText('Transaction successful');
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
  async invalidDeposit(){
    await this.goToDeposit.click();
    await this.inputAmountDeposit.fill("-25");
    await this.depositBtn.click();
    await expect(this.alertSuccesDeposit).toBeHidden();

  }
  async invalidWithdrawl(){
    await this.goToWithdrawl.click();
    await this.inputWithdrawl.fill("-25");
    await this.withdrawlBtn.click();
    await expect(this.alertSuccessWithdrawl).toBeHidden();

  }
}
