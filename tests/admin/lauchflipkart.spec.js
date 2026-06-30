

import { test, expect } from '@playwright/test';

test("Verify Launch flipkart ", async ({ page }) => {

    await page.goto("/")

})

test("Verify add job title", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    
})
