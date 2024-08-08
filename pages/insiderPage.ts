import { expect, Page } from "playwright/test";
export default class Insiderpage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    public async goto() {
        await this.page.goto('https://insider.saigontechnology.vn/dashboard')
    }

    //Locators
    txtempcode = () => this.page.locator("//*[@id='Username']");
    txtPassword = () => this.page.locator("//*[@id='Password']");
    btnLogin = () => this.page.locator("//button[text()='Login']");
    linkidentify = () => this.page.locator("//button[text()='Verify']");
    linkcode = () => this.page.locator("//*[@id='OTP']");

    //Sucessfully Login
    public async enterCredential() {
        await this.txtempcode().fill('thanh.phamthi');
        await this.txtPassword().fill('476940');
        await this.btnLogin().click();
        await expect(this.linkidentify()).toBeVisible()
    }
}