import { Page } from "playwright-core";

export class navigatePG{
    page:Page;
    constructor(page:Page){
        this.page = page;
    }
    async goToHomePage() {
        await this.page.goto("https://nearform.github.io/testing-playground/#/");
     }
}