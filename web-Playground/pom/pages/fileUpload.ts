import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";


export class fileUpload {
    page: Page;
    goToUpload: Locator;
    uploadBtn: Locator;
    fileLabel: Locator;
    successUpload: Locator;
    uploadConfirmBtn: Locator;

    constructor (page:Page){
        this.page = page;
        this.goToUpload = this.page.getByRole('link', { name: 'File Upload Using common' });
        this.uploadBtn = this.page.locator("label[for='icon-button-file']");
        this.fileLabel = this.page.getByTestId('selected-file-name');
        this.successUpload = this.page.getByText('File "upload.txt" uploaded');
        this.uploadConfirmBtn = this.page.getByTestId('upload-button');
    }
    async uploadFile(){
        await this.goToUpload.click();
        await this.uploadBtn.setInputFiles("C:/Users/aacuna/Documents/upload.txt");
        await expect(this.fileLabel).toHaveText('File: "upload.txt"');
        await this.uploadConfirmBtn.click();
        await this.successUpload.waitFor({state:"visible"});
        await expect(this.successUpload).toHaveText('File "upload.txt" uploaded successfully!');
        /*await this.page.once("dialog",(dialog) =>{
            console.log(dialog.message());
            dialog.accept();
        });*/
    }
}