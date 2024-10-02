import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class radioButton {
  page: Page;
  goToRadioButton: Locator;
  redBtn: Locator;
  blueBtn: Locator;
  yellowBtn: Locator;
  purpleBtn: Locator;
  greenBtn: Locator;
  orangeBtn: Locator;
  whiteBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToRadioButton = this.page.getByRole("link", {
      name: "Radio Button A set of radio",
    });
    this.redBtn = this.page.getByLabel("Red");
    this.blueBtn = this.page.getByLabel("Blue");
    this.yellowBtn = this.page.getByLabel("Yellow");
    this.purpleBtn = this.page.getByLabel("Purple");
    this.greenBtn = this.page.getByLabel("Green");
    this.orangeBtn = this.page.getByLabel("Orange");
    this.whiteBtn = this.page.locator("label").filter({ hasText: "White" });
  }
  async selectGreen() {
    if (await this.greenBtn.isHidden()) {
      await this.yellowBtn.click();
      await this.blueBtn.click();
      await this.greenBtn.click();
    } else {
      await expect(this.greenBtn).toBeVisible();
      console.log("El Verde ya esta visible!");
    }
    console.log("Llegamos al Verde!");
  }
  async selectPurple() {
    await this.goToRadioButton.click();

    if (await this.purpleBtn.isHidden()) {
      await this.redBtn.click();
      await this.blueBtn.click();
      await this.purpleBtn.click();
    } else {
      await expect(this.purpleBtn).toBeVisible();
      console.log("El Morado ya esta visible!");
    }
    console.log("Llegamos al Morado!");
  }
  async selectOrange() {
    if (await this.orangeBtn.isHidden()) {
      await this.yellowBtn.click();
      await this.redBtn.click();
      await this.orangeBtn.click();
    } else {
      await expect(this.orangeBtn).toBeVisible();
      console.log("El Naranja ya esta visible!");
    }
    console.log("Llegamos al Naranja!");
  }
  async findWhite() {
    await expect(this.whiteBtn).toBeDisabled();
    console.log("El color Blanco no puede ser seleccionado");
  }
}
