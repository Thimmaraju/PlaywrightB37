import { test, expect } from '@playwright/test';

import logindata from "../../testdata/login.json"

import jobtitledata from "../../testdata/addjobtitle.json"

import { generateUniqueJobTitle } from '../../utilities/testDataUtils.js';

test("Verify add job title",{tag: "@Raju"}, async ({ page }) => {

    console.log("Navigating to login page")
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    console.log("Launched Application")

    console.log("Filling username")
    await page.locator("input[name='username']").fill(logindata.username)
    console.log("username Entered :" + logindata.username)

    console.log("Filling password")
    await page.locator("//input[@type='password']").fill(logindata.password)
    console.log("Password Entered")

    console.log("Clicking login button")
    await page.locator("button[type='submit']").click()
    console.log("Login submitted")

    console.log("Navigating to Admin module")
    await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
    console.log("Admin module opened")

    console.log("Clicking Job menu")
    await page.locator("//span[normalize-space(text())='Job']").click()
    console.log("Job menu expanded")

    console.log("Selecting Job Titles")
    await page.getByRole('menuitem', { name: 'Job Titles' }).click()
    console.log("Job Titles page opened")

    console.log("Clicking Add button")
    await page.getByRole('button', { name: 'Add' }).click()
    console.log("Add job title form opened")


    console.log("Filling job title")
    await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(generateUniqueJobTitle())
    console.log("Job title entered")

    console.log("Waiting for form readiness")
    await page.waitForTimeout(5000)
    console.log("Wait completed")

    console.log("Adding job description")
    await page.getByPlaceholder('Type description here').fill(jobtitledata.jobdescription)
    console.log("Job description entered")

    console.log("Adding notes")
    await page.getByRole('textbox', { name: 'Add note' }).fill(jobtitledata.notes)
    console.log("Notes entered")

    console.log("Clicking Save")
    await page.getByText('Save', { exact: true }).click()
    console.log("Save clicked")

    console.log("Verifying URL")
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
    console.log("URL verified")

})


