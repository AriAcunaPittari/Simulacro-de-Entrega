import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";
import { parse } from "url";

export class variousInputs {
  page: Page;
  goToVariousInputsBtn: Locator;
  clearAllBtn: Locator;
  textInput: Locator;
  textOutput: Locator;
  passInput: Locator;
  passOutput: Locator;
  numberInput: Locator;
  numberOutput: Locator;
  dateInput: Locator;
  dateOutput: Locator;
  textAreaInput: Locator;
  textAreaOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToVariousInputsBtn = this.page.getByRole("link", {
      name: "Various Inputs There are all",
    });
    this.clearAllBtn = this.page.getByRole("button", { name: "Clear All" });
    this.textInput = this.page.getByTestId("text-input");
    this.textOutput = this.page.locator('input[type="text"]').nth(1);
    this.passInput = this.page.getByTestId("password-input");
    this.passOutput = this.page
      .getByRole("main")
      .locator("div")
      .filter({ hasText: "PasswordInput:Output:" })
      .locator('input[type="text"]');
    this.numberInput = this.page.getByTestId("number-input");
    this.numberOutput = this.page
      .getByRole("main")
      .locator("div")
      .filter({ hasText: "NumberInput:Output:" })
      .getByRole("textbox");
    this.dateInput = this.page.getByTestId("date-input");
    this.dateOutput = this.page
      .getByRole("main")
      .locator("div")
      .filter({ hasText: "DateInput:Output:" })
      .locator('input[type="text"]');
    this.textAreaInput = this.page.getByTestId("textarea-input");
    this.textAreaOutput = this.page.locator("textarea").nth(2);
  }
  async CompleteText() {
    await this.goToVariousInputsBtn.click();
    await this.textInput.fill("Esto es un texto");
    /*if (this.textInput === this.textOutput) {
      console.log("Los textos coinciden");
    } else {
      console.log("Los textos NO coinciden");
    }*/
  }
  async CompletePassword() {
    await this.passInput.fill("c0ntrasen14");
    /*if (this.passInput === this.passOutput) {
      console.log("Las Contraseñas coinciden");
    } else {
      console.log("Las Contraseñas NO coinciden");
    }*/
  }
  async CompleteNumber() {
    await this.numberInput.fill("123654789");
    /*if (this.numberInput === this.numberOutput) {
      console.log("Los numeros coinciden");
    } else {
      console.log("Los numeros NO coinciden");
    }*/
  }
  async CompleteDate() {
    await this.dateInput.fill("1996-09-30");
}
  async CompleteTextArea() {
    await this.textAreaInput.fill(
      "Esto es un texto extremadamente largo que solo es para aprovechar espacios del area de texto."
    );
    /*if (this.textAreaInput === this.textAreaOutput) {
      console.log("Los textos en el Area coinciden");
    } else {
      console.log("Los textos en el Area NO coinciden");
    }*/
  }
  async ClearAll() {
    await this.clearAllBtn.click();
    
  }
}
