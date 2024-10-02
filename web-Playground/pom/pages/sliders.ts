import { Locator, Page } from "playwright-core";

export class sliders {
  page: Page;
  goToSliders: Locator;
  basicSliderInput: Locator;
  rangeSliderInputONE: Locator;
  rangeSliderInputTWO: Locator;
  sliderWithInputValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToSliders = this.page.getByRole("link", {
      name: "Sliders A range of sliders",
    });
    this.basicSliderInput = this.page
      .getByTestId("basic-slider")
      .locator("span")
      .locator("input[value='1']");
    //this.basicSliderInput = this.page.getByTestId('basic-slider').locator('span').filter({ hasText: '1' }).first();
    this.rangeSliderInputONE = this.page
      .getByTestId("range-slider")
      .locator("span")
      .locator("input[value='1']");
    this.rangeSliderInputTWO = this.page
      .locator("span")
      .locator("input[value='25']");
    this.sliderWithInputValue = this.page.getByLabel("Value");
  }
  async moveBasicSlider() {
    await this.goToSliders.click();
    await this.basicSliderInput.fill("55");

  }
  async moveRangeSlider() {
    await this.rangeSliderInputTWO.fill("85");
    await this.rangeSliderInputONE.fill("62");
  }
  async moveWithInputBoxSlider() {
    await this.sliderWithInputValue.fill("25");
  }
}
