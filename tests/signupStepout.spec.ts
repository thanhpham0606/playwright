import { test } from "@playwright/test";
import SignupStepout from "../pages/signupStepout";
const email = `thanh.phamthi+${Date.now()}@saigontechnology.com`


test('click signup button', async ({ page }) => {

    const signupStepout = new SignupStepout(page);

    // Navigate to signup link
    await signupStepout.goto();
        await signupStepout.linkSignup().click();
        await signupStepout.setupsignup(email);
       await signupStepout.setuppassword();
            
})
test('signup taskstep failed', async ({ page }) => {

    const signupStepout = new SignupStepout(page);

    // Navigate to signup link
    await signupStepout.goto();
        await signupStepout.linkSignup().click();
        await signupStepout.setupsignup('thanh.phamthi@saigontechnology.com');
        await signupStepout.setuppasswordfailed();
        
})
