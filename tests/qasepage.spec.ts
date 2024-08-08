import { test } from "@playwright/test";
import qasePage from "../pages/qasePage";
const email = 'thanh.phamthi@saigontechnology.com';
const password = 'Goodmorning!0201';

test('qasepage', async ({ page }) => {

    const qasePage1 = new qasePage(page);

    // //Navigate to login page
    await qasePage1.goto();
    await qasePage1.enterCredential(email, password)
})

test('gotoTS', async ({ page }) => {

    const qasePage1 = new qasePage(page);

    // //Navigate to login page
    await qasePage1.goto();
    await qasePage1.enterCredential(email, password);
    await qasePage1.GotoTS();
})
test('Create test suit', async ({ page }) => {
    const qasePage1 = new qasePage(page);
    await qasePage1.goto();
    await qasePage1.enterCredential(email, password);
    await qasePage1.GotoTS();
    await qasePage1.Createtestsuit();
})
test('Create test case', async ({ page }) => {
    const qasePage1 = new qasePage(page);
    await qasePage1.goto();
    await qasePage1.enterCredential(email, password);
    await qasePage1.GotoTS();
    await qasePage1.Createtestcase1();
})