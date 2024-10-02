import { Locator, Page } from "playwright-core";


export class fileDownload {
    page: Page;
    downloadBtn: Locator;
    goToDownload: Locator;
    constructor (page:Page){
        this.page = page;
        this.downloadBtn = this.page.getByRole('link', { name: 'File Download Using common' });
        this.goToDownload = this.page.getByRole('button', { name: 'Download File' });
    }
    async downloadFile() {
        await this.goToDownload.click();
        await this.downloadBtn.click();
    }
}