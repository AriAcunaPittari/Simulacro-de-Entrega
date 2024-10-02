import { Page } from "playwright-core";
import { bankManagerLogin } from "./pages/bankManagerLogin";
import { navigateBank } from "./pages/navigateBank";
import { loginCustomer } from "./pages/customerLogin";

export class poManagerBank {
  page: Page;
  bankManager: bankManagerLogin;
  navigateBank: navigateBank;
  loginCustomer: loginCustomer;
  constructor(page: Page) {
    this.page = page;
    this.bankManager = new bankManagerLogin(this.page);
    this.navigateBank = new navigateBank(this.page);
    this.loginCustomer = new loginCustomer(this.page);
  }
  getbankManager() {
    return this.bankManager;
  }
  getnavigateBank() {
    return this.navigateBank;
  }
  getloginCustomer() {
    return this.loginCustomer;
  }
}
