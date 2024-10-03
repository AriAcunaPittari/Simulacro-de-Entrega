import { test, expect } from "@playwright/test";
import { poManagerBank } from "../pom/poManager";

test.describe('TestCases de "Bank" ', () => {
  test("Agregar Cliente", async ({ page }) => {
    const pom = new poManagerBank(page);
    const bankManager = await pom.bankManager;
    const navigate = await pom.navigateBank;
    const loginCustomer = await pom.loginCustomer;
    await navigate.goToHomePage();
    await bankManager.addCustomer();
    await bankManager.openAccount();
    await navigate.goToHomePage();
    await loginCustomer.login();
    await loginCustomer.invalidDeposit(); //Casos Negativos
    await loginCustomer.invalidWithdrawl(); //Casos Negativos
    await navigate.goToHomePage();
    await bankManager.deleteCustomer();
  });
});
