import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";


export class notification {
    page: Page;
    goToNotifications: Locator;
    selectSuccessBtn: Locator;
    selectInfoBtn: Locator;
    selectWarningBtn: Locator;
    selectErrorBtn: Locator;
    popUpSuccess: Locator;
    popUpInfo:Locator;
    popUpWarning: Locator;
    popUpError: Locator;
    labelSuccess: Locator;
    labelInfo: Locator;
    labelWarning: Locator;
    labelError: Locator;

    constructor (page:Page){
        this.page = page;
        this.goToNotifications = this.page.getByRole('link', { name: 'Notification Check alerts' });
        this.selectSuccessBtn = this.page.getByTestId('button-success');
        this.selectInfoBtn = this.page.getByTestId('button-info');
        this.selectWarningBtn = this.page.getByTestId('button-warning');
        this.selectErrorBtn = this.page.getByTestId('button-error');
        this.popUpSuccess = this.page.getByTestId('notification-success').getByText('This is a successful');
        this.popUpInfo = this.page.getByTestId('notification-info').getByText('This is an info notification');
        this.popUpWarning = this.page.getByTestId('notification-warning').getByText('This is a warning');
        this.popUpError = this.page.getByTestId('notification-error').getByText('This is an error notification');
        this.labelSuccess = this.page.getByTestId('message-success');
        this.labelInfo = this.page.getByTestId('message-info');
        this.labelWarning = this.page.getByTestId('message-warning');
        this.labelError = this.page.getByTestId('message-error');
    }
    async Success(){
        await this.goToNotifications.click();
        await this.selectSuccessBtn.click();
        await expect(this.labelSuccess).toBeVisible();
        await expect(this.popUpSuccess).toHaveText('This is a successful notification message');
    }
    async Info(){
        await this.selectInfoBtn.isEnabled();
        await this.selectInfoBtn.click();
        await expect(this.labelInfo).toBeVisible();
        await expect(this.popUpInfo).toHaveText('This is an info notification message');
    }
    async Warning(){
        await this.selectWarningBtn.isEnabled();
        await this.selectWarningBtn.click();
        await expect(this.labelWarning).toBeVisible();
        await expect(this.popUpWarning).toHaveText('This is a warning notification message');
    }
    async Error(){
        await this.selectErrorBtn.isEnabled();
        await this.selectErrorBtn.click();
        await expect(this.labelError).toBeVisible();
        await expect(this.popUpError).toHaveText('This is an error notification message');
    }
}