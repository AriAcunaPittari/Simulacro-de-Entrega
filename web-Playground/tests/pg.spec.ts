import test, { chromium, expect } from "@playwright/test";
import { poManagerPG } from "../pom/poManager";


test.describe("TestCases de Playground", () => {
  test("Agregar y eliminar", async ({ page }) => {
    // OK!
    const pom = new poManagerPG(page);
    const addRemove = await pom.addRemove;
    const navigate = await pom.navigatePG;
    await navigate.goToHomePage();
    await addRemove.addElement();
    await addRemove.removeElement();
  });
  test("Marcar y Desmarcar Checkboxes", async ({ page }) => {
    // OK!
    const pom = new poManagerPG(page);
    const checkBox = await pom.checkBox;
    const navigate = await pom.navigatePG;
    await navigate.goToHomePage();
    await checkBox.checkAndUncheck();
    await checkBox.requiredCheck();
    await checkBox.checkIcons();
    await checkBox.checkTree();
  });
  test("Agarrar y arrastrar elementos", async ({ page }) => {
    // OK - EASY!
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    const dragAndDrop = await pom.dragAndDrop;
    await navigate.goToHomePage();
    await dragAndDrop.dragAndDropCounter();
    // Not Finished - Hard
  });
  test("Tabla dinamica", async ({ page }) => {
    //Pendiente
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    await navigate.goToHomePage();
  });
  test("Descargar elementos", async ({ page }) => {
    // Falta corroborar el archivo descargado.
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    const fileDownload = await pom.fileDownload;
    await navigate.goToHomePage();
    await fileDownload.downloadFile();
  });
  test.only("Subir un elemento", async ({ page }) => {
    // OK!
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    const fileUpload = await pom.fileUpload
    await navigate.goToHomePage();
    await fileUpload.uploadFile();
  });
  test("Logueo", async ({ page }) => {
    // OK!
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    const loginForm = await pom.loginForm;
    await navigate.goToHomePage();
    await loginForm.Login();
    await loginForm.LogOut();
  });
  test("Notificaciones", async ({ page }) => {
    // OK!
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    const notification = await pom.notification;
    await navigate.goToHomePage();
    await notification.Success();
    await notification.Info();
    await notification.Warning();
    await notification.Error();
  });
  test("Seleccionar Opciones", async ({ page }) => {
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    await navigate.goToHomePage();
  });
  test("Seleccionar rango de Sliders", async ({ page }) => {
    // Pendiente
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    await navigate.goToHomePage();
  });
  test("Visualizar tooltips", async ({ page }) => {
    // Sin poder probarlo y dudas con Locator
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    const tooltips = await pom.tooltips;
    await navigate.goToHomePage();
    await tooltips.hoverElements();
  });
  test("Completar diversos inputs", async ({ page }) => {
    // No coinciden / Completa los campos correctamente.
    const pom = new poManagerPG(page);
    const navigate = await pom.navigatePG;
    const variousInputs = await pom.variousInputs;
    await navigate.goToHomePage();
    await variousInputs.CompleteText();
    await variousInputs.CompletePassword();
    await variousInputs.CompleteNumber();
    await variousInputs.CompleteDate();
    await variousInputs.CompleteTextArea();
    await page.pause();
    await variousInputs.ClearAll();
  });
});