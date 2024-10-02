import { Page } from "playwright-core";


export class tooltips {
    page: Page;
    
    constructor (page:Page){
        this.page = page;
    }
}