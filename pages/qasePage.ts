import { Page } from "playwright/test";
import { expect } from "@playwright/test";

export default class Qase {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public async goto() {
        await this.page.goto('https://app.qase.io/login')
    }
    //Locators
    txtEmail = () => this.page.locator("//input[@placeholder='Work email']");
    txtPassword = () => this.page.locator("//input[@name='password']");
    // btnLogin = () => this.page.getByRole('button', { name: 'Sign in' });
    btnSignin = () => this.page.locator("//button/span[text()='Sign in']");
    clicklogin = () => this.page.locator("//button/span[text()='Create new project']");
    clicktaskstep = () => this.page.locator("//a[text()='Task Stepping']");
    repository = () => this.page.locator("//div/h1[text()=' repository']");
    btnsuit = () => this.page.locator("//*[@id='create-suite-button']");
    clickbtnsuit = () => this.page.locator("//div/h3[text()='Create suite']");
    suitname = () => this.page.locator("//input[@placeholder='For example: Web Application']");
    dropdownlist = () => this.page.locator("//div[text()='Project root']");
    selectvalue = () => this.page.locator("//div[text()='Task stepping - Decouple step table']");
    description = () => this.page.locator("//div[label='Description']/following-sibling::div//div[@class='ProseMirror toastui-editor-contents']");
    Preconditions = () => this.page.locator("//div[label='Preconditions']/following-sibling::div//div[@class='ProseMirror toastui-editor-contents']");
    btnCreate = () => this.page.locator("//button/span[text()='Create']");
    clickCreate = () => this.page.locator("//a[text()='Update work order header']")

    btncase = () => this.page.locator("//*[@id='create-case-button']");
    createtestcase = () => this.page.locator("//div/h1[text()='Create test case']");
    title = () => this.page.locator("//input[@placeholder='For example: Authorization']");
    descriptiontc = () => this.page.locator("//div/p[@data-placeholder='For example: We can authorize on page http://example.com/login']");
    btnaddstep = () => this.page.locator("//button/span[text()=' Add step']");
    tcstep = () => this.page.locator("//div[@class='case-create-block steps-block']");
    //UpdateWOheader = () => this.page.locator("//h3/span[text()='Update work order header']");
    stepaction = () => this.page.locator("//div/p[@data-placeholder='Step Action']");
    //data = () => this.page.locator("//p[@data-placeholder='Data']/parent::div[@contenteditable='true']");
    //data = () => this.page.locator("//div/p[@data-placeholder='Data']");
    dataclick = () => this.page.locator("//p[@data-placeholder='Data']/parent::div[@class='toastui-editor-contents']");
    dataafterclick = () => this.page.locator("//p[@data-placeholder='Data']/parent::div[@class='ProseMirror toastui-editor-contents ProseMirror-focused']");
    //expectresult = () => this.page.locator("//div/p[@data-placeholder='Expected result']");
    expectresultclick = () => this.page.locator("//p[@data-placeholder='Expected result']/parent::div[@class='toastui-editor-contents']");
    expectresultafterclick= () => this.page.locator("//p[@data-placeholder='Expected result']/parent::div[@class='ProseMirror toastui-editor-contents ProseMirror-focused']");
    btnsave = () => this.page.locator("//button/span[text()='Save']");
    aftersave = () => this.page.locator("//h1/div[text()='Verify that user can update the existing WO header on UI']");

    //addsteps = () => this.page.locator("//*[contains(text(),'Test Case Steps')]");




    //errormesssage = () => this.page.locator("//*[contains(text(),'We couldn’t find an account matching the email and password you enter.')]");

    //Sucessfully Login
    public async enterCredential(email, password) {
        await this.txtEmail().fill(email);
        await this.txtPassword().fill(password);
        await this.btnSignin().click();
        await expect(this.clicklogin()).toBeVisible();
    }

    //Click to go to TS project
    public async GotoTS() {
        //await this.txtEmail().fill('adminstrator@gmail.com');
        //await this.txtPassword().fill('123Pa$$word!12');
        await this.clicktaskstep().click();
        await this.page.goto('https://app.qase.io/project/TS');
        await expect(this.repository()).toBeVisible();


    }
    public async Createtestsuit() {
        //await this.clicktaskstep().click();
        await this.btnsuit().click();
        await expect(this.clickbtnsuit()).toBeVisible();
        await this.suitname().fill('Update work order header');
        await this.dropdownlist().click();
        await this.selectvalue().click();
        await this.description().fill(`Create test suit for update WOheader ${Date.now()}`);
        await this.Preconditions().fill('WO 1234567 has been existed on system');
        await this.btnCreate().click();
        await this.page.goto('https://app.qase.io/project/TS');
        await expect(this.repository()).toBeVisible();
        //await expect(this.clickCreate()).toBeVisible();

    }

    public async Createtestcase1() {
        //await this.clicktaskstep().click();
        await this.btncase().click();
        await expect(this.createtestcase()).toBeVisible();
        await this.title().fill('Verify that user can update the existing WO header on UI');
        await this.descriptiontc().fill('Update WO 1234567');
        await this.btnaddstep().click();
        await expect(this.tcstep()).toBeVisible();
        await this.stepaction().fill('Navigate to the Task Step Table page, edit information of WO to any valid data then clicking create');
        await this.dataclick().click();
        await this.dataafterclick().fill('WO 1234567');
        await this.expectresultclick().click();
        await this.expectresultafterclick().fill('Updated WO 1234567 successfully');
        await this.btnsave().click();
        await this.page.goto('https://app.qase.io/project/TS');
        await expect(this.repository()).toBeVisible();
        //await expect(this.aftersave()).toBeVisible();

    }
}

//expect (this.linkTaskstep()).toBeVisible();
