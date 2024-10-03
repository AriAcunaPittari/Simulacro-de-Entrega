import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export class dynamicTable {
  page: Page;
  goToDynamicTable: Locator;
  table: Locator;
  rowTable: Locator;
  targetScenario: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToDynamicTable = this.page.getByRole("link", {
      name: "Dynamic Table Find the data",
    });
    this.table = this.page.locator("table").locator("tbody");
    this.rowTable = this.table.locator("tr");
    this.targetScenario = this.page.getByTestId("target-scenario");
  }
  async encontrarResultado() {
    await this.goToDynamicTable.click();
    const dataSolicitada = await this.targetScenario.innerText();
    //const targetParseName = parseFloat(dataSolicitada?.replace('%', '',));
    //console.log("target:"+targetParseName);
    const targetSplit = dataSolicitada.split(" ");
    console.log("split:" + targetSplit);
    const browserName = targetSplit.slice(0);
    console.log("Browser Name: " + browserName);
    //const cpuDataNeeded = targetSplit.slice(2);
    // console.log("CPU Data needed: "+cpuDataNeeded);
    //await this.page.pause();

    for (let i = 0; i < (await this.rowTable.count()); i++) {
      const colum = await this.rowTable.nth(i);
      const nameFound = await colum.locator("td").nth(0).innerText();
      console.log("Nombre: " + nameFound);
      const cpuData = await colum.locator("td").nth(1).innerText();
      console.log("CPU DATA: " + cpuData);
      console.log("Se solicita encontrar: " + dataSolicitada);
      //await this.page.pause();
      if (browserName.includes(nameFound) && browserName.includes(cpuData)) {
        console.log("resultado encontrado!");
        //await expect().toBe(this.targetScenario);
        break;
      } else {
        console.log("No se encontró el resultado en la tabla.");
      }
    }
  }
}
