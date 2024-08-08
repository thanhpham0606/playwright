import { test } from "@playwright/test";
import TaskStep from "../pages/taskStep";

test('Login taskstep', async ({ page }) => {

    const taskStep = new TaskStep(page);
    const email = 'adminstrator@gmail.com';
    const password = '123Pa$$word!';

    // //Navigate to login page
    await taskStep.goto();
    await taskStep.enterCredential(email, password);
})

test('loginfailed', async ({ page }) => {
    const loginfailed = new TaskStep(page);
    await page.goto('https://step-out.maintsys.au/auth/signin')
    await loginfailed.loginfailed();

})