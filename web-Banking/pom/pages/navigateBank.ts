import { Page } from "playwright-core";

export class navigateBank{
    page:Page;
    constructor(page:Page){
        this.page = page;
    }
    async goToHomePage() {
        await this.page.goto("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
     }
}