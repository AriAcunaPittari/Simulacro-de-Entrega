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
    const textin = await this.textInput.inputValue();
    console.log("VALOR DE INPUT:"+textin);
    const textout = await this.textOutput.inputValue();
    console.log("VALOR DE OUTPUT:"+textout);

    if (textin === textout) {
      console.log("Los textos coinciden");
    } else {
      console.log("Los textos NO coinciden");
    }
  }
  async CompletePassword() {
    await this.passInput.fill("c0ntrasen14");
    const passIn = await this.passInput.inputValue();
    console.log("VALOR DE INPUT:"+passIn);
    const passOut = await this.passOutput.inputValue();
    console.log("VALOR DE OUTPUT:"+passOut);
    if (passIn === passOut) {
      console.log("Las Contraseñas coinciden");
    } else {
      console.log("Las Contraseñas NO coinciden");
    }
  }
  async CompleteNumber() {
    await this.numberInput.fill("123654789");
    const numbIn = await this.numberInput.inputValue();
    console.log("VALOR DE INPUT:"+numbIn);
    const numOut = await this.numberOutput.inputValue();
    console.log("VALOR DE OUTPUT:"+numOut);
    if (numbIn === numOut) {
      console.log("Los numeros coinciden");
    } else {
      console.log("Los numeros NO coinciden");
    }
  }
  async CompleteDate() {
    await this.dateInput.fill("1996-09-30");
    const dateIn = await this.dateInput.inputValue();
    console.log("VALOR DE INPUT:"+dateIn );
    const dateOut = await this.dateOutput.inputValue();
    console.log("VALOR DE OUTPUT:"+dateOut);
    if (dateIn  === dateOut) {
      console.log("Las fechas coinciden");
    } else {
      console.log("Las fechas NO coinciden");
    }
}
  async CompleteTextArea() {
    await this.textAreaInput.fill(
      "Esto es un texto extremadamente largo que solo es para aprovechar espacios del area de texto."
    );
    const textAreaIn = await this.textAreaInput.inputValue();
    console.log("VALOR DE INPUT:"+textAreaIn);
    const textAreaOut = await this.textAreaOutput.inputValue();
    console.log("VALOR DE OUTPUT:"+textAreaOut);
    if (textAreaIn === textAreaOut) {
      console.log("Los textos en el Area coinciden");
    } else {
      console.log("Los textos en el Area NO coinciden");
    }
  }
  async ClearAll() {
    await this.clearAllBtn.click();
    
  }
}
