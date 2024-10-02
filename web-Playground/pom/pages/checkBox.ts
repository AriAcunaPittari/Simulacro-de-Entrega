import { Locator, Page } from "playwright-core";

export class checkBox {
  page: Page;
  goToCheckBtn: Locator;
  checkBtn: Locator;
  favBtn: Locator;
  saveBtn: Locator;
  requiredBtn: Locator;
  parentBtn: Locator;
  childBtn1: Locator;
  childBtn2: Locator;
  requiredMsg: Locator;
  constructor(page: Page) {
    this.page = page;
    this.goToCheckBtn = this.page.getByRole("link", {
      name: "Checkbox A set of checkbox",
    });
    this.checkBtn = this.page.getByLabel("Checked");
    this.favBtn = this.page.getByTestId("favorite").getByRole("checkbox");
    this.saveBtn = this.page.getByTestId("bookmark").getByRole("checkbox");
    this.requiredBtn = this.page.getByLabel("Required *");
    this.parentBtn = this.page.getByLabel("Parent");
    this.childBtn1 = this.page.getByLabel("Child").first();
    this.childBtn2 = this.page.getByLabel("Child").nth(1);
    this.requiredMsg = this.page.getByTestId("required-message");
  }
  async checkAndUncheck() {
    await this.goToCheckBtn.click();
    await this.checkBtn.check();
    if (await this.checkBtn.isChecked()) {
      await this.checkBtn.uncheck();
    }
  }
  async requiredCheck() {
    if (await this.requiredMsg.isVisible) {
      await this.requiredBtn.check();
      console.log("Es visible");
    } else {
      console.log("No es visible, es posible continuar.");
    }
  }
  async checkIcons() {
    await this.favBtn.check();
    await this.saveBtn.check();

    if (await this.favBtn.isChecked()) {
      await this.favBtn.uncheck();
    }
    if (await this.saveBtn.isChecked()) {
      await this.saveBtn.uncheck();
    }
  }
  async checkTree() {
    await this.parentBtn.check();
    if (await this.parentBtn.isChecked()) {
      await this.childBtn1.isChecked();
      await this.childBtn2.isChecked();
    }
    await this.childBtn1.uncheck();
    if (await this.childBtn2.isChecked()) {
      await this.parentBtn.isChecked();
    }
    await this.page.goBack();
  }
}
