import { Page } from "playwright-core";


export class fileUpload {
    page: Page;
    
    constructor (page:Page){
        this.page = page;
    }
}