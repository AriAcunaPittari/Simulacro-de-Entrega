import { Page } from "playwright-core";


export class fileDownload {
    page: Page;
    
    constructor (page:Page){
        this.page = page;
    }
}