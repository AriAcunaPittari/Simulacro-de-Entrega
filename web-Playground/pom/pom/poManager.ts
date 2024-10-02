import { Page } from "playwright-core";
import { addRemove } from "./pages/addRemove";
import { checkBox } from "./pages/checkBox";
import { dragAndDrop } from "./pages/dragAndDrop";
import { dynamicTable } from "./pages/dynamicTable";
import { fileDownload } from "./pages/fileDownload";
import { fileUpload } from "./pages/fileUpload";
import { loginForm } from "./pages/loginForm";
import { notification } from "./pages/notification";
import { radioButton } from "./pages/radioButton";
import { sliders } from "./pages/sliders";
import { tooltips } from "./pages/tooltips";
import { variousInputs } from "./pages/variousInputs";
import { navigatePG } from "./pages/navigate";

export class poManagerPG {
  page: Page;
  addRemove: addRemove;
  checkBox: checkBox;
  dragAndDrop: dragAndDrop;
  dynamicTable: dynamicTable;
  fileDownload: fileDownload;
  fileUpload: fileUpload;
  loginForm: loginForm;
  notification: notification;
  radioButton: radioButton;
  sliders: sliders;
  tooltips: tooltips;
  variousInputs: variousInputs;
  navigatePG: navigatePG
  constructor(page: Page) {
    this.page = page;
    this.addRemove = new addRemove(this.page);
    this.checkBox = new checkBox(this.page);
    this.dragAndDrop = new dragAndDrop(this.page);
    this.dynamicTable = new dynamicTable(this.page);
    this.fileDownload = new fileDownload(this.page);
    this.fileUpload = new fileUpload(this.page);
    this.loginForm = new loginForm(this.page);
    this.notification = new notification(this.page);
    this.radioButton = new radioButton(this.page);
    this.sliders = new sliders(this.page);
    this.tooltips = new tooltips(this.page);
    this.variousInputs = new variousInputs(this.page);
    this.navigatePG = new navigatePG(this.page);
}
  getaddRemove() {
    return this.addRemove;
  }
  getcheckBox() {
    return this.checkBox;
  }
  getdragAndDrop() {
    return this.dragAndDrop;
  }
  getdynamicTable() {
    return this.dynamicTable;
  }
  getfileDownload() {
    return this.fileDownload;
  }
  getfileUpload() {
    return this.fileUpload;
  }
  getloginForm() {
    return this.loginForm;
  }
  getnotification() {
    return this.notification;
  }
  getradioButton() {
    return this.radioButton;
  }
  getsliders() {
    return this.sliders;
  }
  gettooltips() {
    return this.tooltips;
  }
  getvariousInputs() {
    return this.variousInputs;
  }
  getnavigatePG() {
    return this.navigatePG;
  }
}
