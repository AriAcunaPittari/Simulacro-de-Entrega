import { Page } from "playwright-core";


export class dynamicTable {
    page: Page;
    
    constructor (page:Page){
        this.page = page;
    }
}