import { Page } from "playwright/test";
import { expect } from "@playwright/test";

export default class SignupStepout {
    page: Page;
    
        constructor(page: Page) {
            this.page = page;
        }
   
    public async goto() {
        await this.page.goto('https://step-out.maintsys.au/auth/signin')
    }
    //locators
    linkSignup = () => this.page.locator("//*[contains(text(),'Sign Up')]");
    //Clicksignup


    //Fillinfos
    txtfirstname = () => this.page.locator("//input[@name = 'firstName']");
    txtlastname = () => this.page.locator("//input[@name='lastName']");
    txtemail = () => this.page.locator("//input[@name = 'email']");
    txtphone = () => this.page.locator("//input[@name='phoneNumber']");
    //Checkboxchecked
    labelcheck = () => this.page.locator('//*[@id="root"]/div/div[1]/div/div[2]/div/div[2]/div[5]/label/span[1]');
    labelcheck1 = () => this.page.locator("//input[@type='checkbox']");
    //Clicknext
    btnnext = () => this.page.locator("//button[text()='Next, Set up Password']");
    //Navigate to linksetup
    linksetup = () => this.page.locator("//*[contains(text(),'1. Fill In')]");

    
    //Setup signup
    public async setupsignup(email) {
        await this.txtfirstname().fill('Thanh1');
        await this.txtlastname().fill('Pham');
        await this.txtemail().fill(email);
        await this.txtphone().fill('0777478969');
        //Clickcheckboxtobechecked
        await this.labelcheck().click();
        await expect(this.labelcheck()).toBeChecked();
        expect(this.btnnext()).toBeVisible();
        await this.btnnext().click();
        await expect(this.linksetup()).toBeVisible();
    }
    //locators setup password
    txtpassword = () => this.page.locator("//input[@name = 'password']");
    txtpasswordconfirm = () => this.page.locator("//input[@name='passwordConfirmation']");
    btnsave = () => this.page.locator("//button[text()='Save']");
    linksignupsuccess = () => this.page.locator("//*[contains(text(),'Your account has been successfully created.')]");
    linksignupfailed = () => this.page.locator("//*[contains(text(),'is already taken.')]");

    //Setup password
    public async setuppassword() {
        await this.txtpassword().fill('Test@1234');
        await this.txtpasswordconfirm().fill('Test@1234');
        await this.btnsave().click();
        await expect(this.linksignupsuccess()).toBeVisible()
        ;
    }
    public async setuppasswordfailed() {
        await this.txtpassword().fill('Test@1234');
        await this.txtpasswordconfirm().fill('Test@1234');
        await this.btnsave().click();
        await expect(this.linksignupfailed()).toBeVisible()
        ;}   
}
