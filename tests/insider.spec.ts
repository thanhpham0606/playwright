import { test } from "@playwright/test";
import Insiderpage from "../pages/insiderPage";
test('insider', async ({ page }) => {

    const insider = new Insiderpage(page);

    // //Navigate to login page
    await insider.goto();
    await insider.enterCredential()
});

