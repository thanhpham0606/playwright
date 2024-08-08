import { Page } from "playwright/test";
import { expect } from "@playwright/test";

export default class TaskStep {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public async goto() {
        await this.page.goto('https://step-out.maintsys.au/insider')
    }
    //Locators
    txtEmail = () => this.page.locator("//input[@placeholder='you@email.com']");
    txtPassword = () => this.page.locator("//input[@name='password']");
    // btnLogin = () => this.page.getByRole('button', { name: 'Sign in' });
    btnSignin = () => this.page.locator("//button[text()='Sign in']");
    linkTaskStep = () => this.page.locator("//*[contains(text(),'Task List/ Work Order Flat View Selector')]");
    errormesssage = () => this.page.locator("//*[contains(text(),'We couldn’t find an account matching the email and password you enter.')]");

    //Sucessfully Login
    public async enterCredential(email, password) {
        await this.txtEmail().fill(email);
        await this.txtPassword().fill(password);
        await this.btnSignin().click();

        await expect(this.linkTaskStep()).toBeVisible()
    }

    //Failed Login
    public async loginfailed() {
        await this.txtEmail().fill('adminstrator@gmail.com');
        await this.txtPassword().fill('123Pa$$word!12');
        await this.btnSignin().click();
        await expect(this.errormesssage()).toBeVisible;


    }
}

//expect (this.linkTaskstep()).toBeVisible();
