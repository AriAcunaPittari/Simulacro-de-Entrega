import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";


export class tooltips {
    page: Page;
    goToTooltip: Locator;
    binIcon: Locator;
    moreInfoBtn: Locator;
    textToHover:Locator;
    constructor (page:Page){
        this.page = page;
        this.goToTooltip = this.page.getByRole('link', { name: 'Tooltips A set of tooltips to' });
        this.binIcon = this.page.getByTestId('delete-button');
        this.moreInfoBtn = this.page.getByTestId('more-info-button');
        this.textToHover = this.page.getByTestId('text');

    }
    async hoverElements(){
        await this.goToTooltip.click();
        await this.binIcon.hover();
        const tooltipBin= await this.page.locator("div.MuiTooltip-tooltip MuiTooltip-tooltipArrow MuiTooltip-tooltipPlacementRight css-1ict8al");
        await expect(tooltipBin).toBe("You don't have permission to do this");
        await this.moreInfoBtn.hover();
        const tooltipInfoButton= await this.page.locator("div.MuiTooltip-tooltip MuiTooltip-tooltipArrow MuiTooltip-tooltipPlacementRight css-1ict8al").innerText();
        await expect(tooltipInfoButton).toBe("For more information, click here:Testing Playground");
        await this.textToHover.hover();
        const tooltipText= await this.page.locator("div.MuiTooltip-tooltip MuiTooltip-tooltipArrow MuiTooltip-tooltipPlacementRight css-1ict8al").innerText();
        await expect(tooltipBin).toBe("A really really long text example");

    }
}