import { Locator, Page } from "playwright-core";

export class addRemove {
  page: Page;
  goToAddRemoveBtn: Locator;
  addElementBtn: Locator;
  clearStorageBtn: Locator;
  removeElementBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToAddRemoveBtn = this.page.getByRole("link", {
      name: "Add/Remove Dynamically add",
    });
    this.addElementBtn = this.page.getByTestId("add-element");
    this.clearStorageBtn = this.page.getByTestId("clear-storage");
    this.removeElementBtn = this.page.getByTestId("remove-element-1");
  }
  async addElement() {
    await this.goToAddRemoveBtn.click();
    await this.addElementBtn.click();
    await this.addElementBtn.click();
  }
  async removeElement() {
    await this.removeElementBtn.click();
  }
  async clearStorage() {
    await this.clearStorageBtn.click();
  }
}
