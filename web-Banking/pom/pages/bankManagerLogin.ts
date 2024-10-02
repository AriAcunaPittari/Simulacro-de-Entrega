import { Locator, Page } from "playwright-core";

export class bankManagerLogin {
  page: Page;
  bankManagerloginBtn: Locator;
  //Add Customer
  openAddCustomer: Locator;
  inputFirstName: Locator;
  inputLastName: Locator;
  inputPostCode: Locator;
  addCustomerBtn: Locator;
  //Open Account
  openAccountBtn: Locator;
  selectUser: Locator;
  selectCurrency: Locator;
  acceptOpenBtn: Locator;

  //Customer Table
  openCustomers: Locator;
  inputSearch: Locator;
  deleteBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bankManagerloginBtn = this.page.getByRole("button", {
      name: "Bank Manager Login",
    });
    // Add Customer
    this.openAddCustomer = this.page
      .getByRole("button", { name: "Add Customer" })
      .first();
    this.inputFirstName = this.page.getByPlaceholder("First Name");
    this.inputLastName = this.page.getByPlaceholder("Last Name");
    this.inputPostCode = this.page.getByPlaceholder("Post Code");
    this.addCustomerBtn = this.page
      .getByRole("form")
      .getByRole("button", { name: "Add Customer" });

    //Open Account
    this.openAccountBtn = this.page.getByRole("button", {
      name: "Open Account",
    });
    this.selectUser = this.page.locator("#userSelect");
    this.selectCurrency = this.page.locator("#currency");
    this.acceptOpenBtn = this.page.getByRole("button", { name: "Process" });

    //Customer Table
    this.openCustomers = this.page.getByRole("button", { name: "Customers" });
    this.inputSearch = this.page.getByPlaceholder("Search Customer");
    this.deleteBtn = this.page.getByRole("button", { name: "Delete" });
  }
  async addCustomer() {
    await this.bankManagerloginBtn.click();
    await this.openAddCustomer.click();
    await this.inputFirstName.fill("Ariana");
    await this.inputLastName.fill("Testing");
    await this.inputPostCode.fill("123456");
    await this.addCustomerBtn.click();
  }
  //async validateInfoRequired(){}
  //async validateInputsOpenAccount(){}
  async openAccount() {
    await this.openAccountBtn.click();
    await this.selectUser.selectOption("6");
    await this.selectCurrency.selectOption("Dollar");
    await this.acceptOpenBtn.click();
  }
  async deleteCustomer() {
    await this.bankManagerloginBtn.click();
    await this.openCustomers.click();
    await this.inputSearch.fill("Ariana");
    await this.deleteBtn.click();
  }
}
