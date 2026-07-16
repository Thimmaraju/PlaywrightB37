import { test, expect } from '@playwright/test';

import data from "../testdata/demoqa.json"

test('test box ', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')
    
    await expect(page.locator("//h1[@class='text-center']")).toBeVisible()

    await expect(page.locator('//h1[@class="text-center"]')).toHaveText('Text Box')

    await page.locator('#userName').fill(data.fullname)

    await page.locator('input[placeholder="name@example.com"]').fill(data.emailaddress)

    await page.locator('#currentAddress').fill(data.currentAddress)

    await page.locator('#permanentAddress').fill(data.permanentaddress)

    await page.locator('#submit').click()

    await expect(page.locator('##name')).toContainText(data.fullname)

 
});


//input[@placeholder="Full Name"]
//input[@id="userName"]
// #userName