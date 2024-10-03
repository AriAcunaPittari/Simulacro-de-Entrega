import { Locator, Page } from "playwright-core";
import fs from "fs";

export class fileDownload {
    page: Page;
    downloadBtn: Locator;
    goToDownload: Locator;
    constructor (page:Page){
        this.page = page;
        this.goToDownload = this.page.getByRole('link', { name: 'File Download Using common' });
        this.downloadBtn = this.page.getByRole('button', { name: 'Download File' });
    }
    async downloadFile() {
        await this.goToDownload.click();
        await this.downloadBtn.click();
        await this.page.pause();
        if (fs.existsSync('C:/Users/aacuna/Downloads/file.txt')){
            console.log("Archivo descargado y encontrado!");
        } else{
            console.log("No se encontro el archivo :(");
        }
    }
}