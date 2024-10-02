import { Locator, Page } from "playwright-core";


export class fileUpload {
    page: Page;
    goToUpload: Locator;
    uploadBtn: Locator;

    constructor (page:Page){
        this.page = page;
        this.goToUpload = this.page.getByRole('link', { name: 'File Upload Using common' });
        this.uploadBtn = this.page.getByRole('button', { name: 'Select File' });

    }
    async uploadFile(){
        await this.uploadBtn.setInputFiles("C:/Users/aacuna/Documents/upload.txt");
        await this.page.once("dialog",(dialog) =>{
            console.log(dialog.message());
            dialog.accept();
        });
    }
}