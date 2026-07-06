import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

import logindata from '../../testdata/login.json';
import jobtitledata from '../../testdata/addjobtitle.json';

async function loginAndOpenAddJobTitlePage(page) {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click();
  await page.locator("//span[normalize-space(text())='Job']").click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
}

function getUniqueJobTitle(prefix = 'Auto Job Title') {
  return `${prefix} ${Date.now()}`;
}

test('should create a job title with valid details', { tag: '@Raju' }, async ({ page }) => {
  const jobTitle = getUniqueJobTitle();

  await loginAndOpenAddJobTitlePage(page);

  await page.getByLabel(/job title/i).fill(jobTitle);
  await page.getByPlaceholder(/type description here/i).fill(jobtitledata.jobdescription);
  await page.getByRole('textbox', { name: /add note/i }).fill(jobtitledata.notes);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page).toHaveURL(/viewJobTitleList/);
  await expect(page.getByText(jobTitle)).toBeVisible();
});

test('should not save when job title is empty', async ({ page }) => {
  await loginAndOpenAddJobTitlePage(page);

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText(/required/i).first()).toBeVisible();
  await expect(page).not.toHaveURL(/viewJobTitleList/);
});

test('should not save a duplicate job title', async ({ page }) => {
  const jobTitle = getUniqueJobTitle('Duplicate Title');

  await loginAndOpenAddJobTitlePage(page);
  await page.getByLabel(/job title/i).fill(jobTitle);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page).toHaveURL(/viewJobTitleList/);

  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByLabel(/job title/i).fill(jobTitle);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText(/already exists|duplicate/i)).toBeVisible();
});

test('should upload a valid job specification file and show the file name', async ({ page }, testInfo) => {
  const jobTitle = getUniqueJobTitle('Uploaded Job');
  const filePath = testInfo.outputPath('job-spec.pdf');
  fs.writeFileSync(filePath, '%PDF-1.4\n%sample pdf');

  await loginAndOpenAddJobTitlePage(page);
  await page.getByLabel(/job title/i).fill(jobTitle);
  await page.locator('input[type="file"]').setInputFiles(filePath);

  await expect(page.getByText(path.basename(filePath))).toBeVisible();

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page).toHaveURL(/viewJobTitleList/);
});

test('should allow cancel without saving the job title', async ({ page }) => {
  const jobTitle = getUniqueJobTitle('Cancelled Job');

  await loginAndOpenAddJobTitlePage(page);
  await page.getByLabel(/job title/i).fill(jobTitle);
  await page.getByPlaceholder(/type description here/i).fill(jobtitledata.jobdescription);
  await page.getByRole('button', { name: 'Cancel' }).click();

  await expect(page).toHaveURL(/viewJobTitleList/);
  await expect(page.getByText(jobTitle)).not.toBeVisible();
});


