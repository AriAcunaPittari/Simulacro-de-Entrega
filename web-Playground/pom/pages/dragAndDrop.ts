import { table } from "console";
import { Locator, Page } from "playwright-core";

export class dragAndDrop {
  page: Page;
  // Drag and Drop Nivel Facil
  goToDragAndDropEASY: Locator;
  selectElementEASY: Locator;
  dropTargetEASY: Locator;
  totalLocatorEASY: Locator;
  // Drag and Drop Nivel Hard
  goToDragDropHARD: Locator;
  rowForms: Locator;

  circleDeposit: Locator;
  squareDeposit: Locator;


  constructor(page: Page) {
    this.page = page;
    // Drag and Drop Nivel Facil
    this.goToDragAndDropEASY = this.page.getByRole("link", {
      name: "Drag and Drop Drag elements",
    });
    this.selectElementEASY = this.page.getByTestId("draggable-box");
    this.dropTargetEASY = this.page.getByTestId("drop-target").locator("..");
    this.totalLocatorEASY = this.page.getByTestId("total-drops");
    // Drag and Drop Nivel Hard
    this.goToDragDropHARD = this.page.getByRole("link", {
      name: "Drag and Drop Drag the",
    });
    this.rowForms = this.page.locator('.MuiGrid-root').first();
    this.circleDeposit = this.page.getByTestId('drop-circle');
    this.squareDeposit = this.page.getByTestId('drop-square');
  }
  async dragAndDropCounter() {
    await this.goToDragAndDropEASY.click();
    const totaltext = await this.totalLocatorEASY.textContent();
    const totalValue = Number(totaltext?.trim());

    for (let i = 0; i < 10; i++) {
      await this.selectElementEASY.dragTo(this.dropTargetEASY);
      i++;
      if (totalValue === 10) {
        console.log("Se llegaron a:" + totalValue + "drops");
      }
    }
    await this.page.goBack();
  }
  async dragAndDropSimbols() {
    await this.goToDragDropHARD.click();
    for (let i = 0; i < await this.rowForms.count(); i++) {
      const search = await this.page.locator("div").nth(i);
      const squareForms = await search.getByTestId('draggable-square').nth(i);
      await this.page.pause();
      const circleForms = await search.getByTestId('draggable-circle').nth(i);
      await this.page.pause();
      if (await squareForms) {
        await this.page.pause();
        await squareForms.dragTo(await this.squareDeposit);
      } else{
        await circleForms.dragTo(await this.circleDeposit);
      }
      
    }
  }
}
