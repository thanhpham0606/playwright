import { test } from "@playwright/test";
import PepTalk from "../pages/PepTalk";


test('test con bot', async ({ page }) => {

    const pepTalk = new PepTalk(page);
    await pepTalk.open();
    await pepTalk.chatwithcertainbudget();
})

test('test con bot2', async ({ page }) => {

    const pepTalk = new PepTalk(page);
    await pepTalk.open();
    await pepTalk.chatwithflexiblebudget();
})

test('test con bot3', async ({ page }) => {

    const pepTalk = new PepTalk(page);
    await pepTalk.open();
    await pepTalk.chatwitheither();
})

test('test con bot4', async ({ page }) => {

    const pepTalk = new PepTalk(page);
    await pepTalk.open();
    await pepTalk.chatwithAcronyms();
})