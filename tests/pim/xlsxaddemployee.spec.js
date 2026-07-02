import { test, expect } from '@playwright/test';

import data from "../../testdata/addemp.json"

const ExcelJS = require('exceljs');
const path = require('path');

import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

})

test('verify add employee with basic details - xlsx', async ({ page }) => {

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(
    path.join(__dirname, '../../testdata/employees.xlsx')
  );

  const worksheet = workbook.getWorksheet(1);

// Read row 2 (first data row)
const row = worksheet.getRow(2);

const firstName = row.getCell(1).text;
const lastName = row.getCell(2).text;

console.log(firstName); // Madhu
console.log(lastName);  // K

  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(faker.string.alphanumeric(5))

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 30000 });
});


test('Verify Validation messages', async ({ page }) => {
  await page.getByRole('textbox', { name: 'First Name' }).fill('rkjlgjiuherhiogferjhfiuerhgiofhergioeruhgiuer');
  await expect(page.getByText('Should not exceed 30').first()).toBeVisible();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('uhyerhfiuy3gfj3wyfhoewfuewiufiuewhnyufewgf');
  await expect(page.getByText('Should not exceed 30').nth(1)).toBeVisible();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('uyewbhdfyuew89fgewfiuyewhfiohewffewkf');
  await page.getByRole('textbox').nth(4).fill('0567fgewyfuewufbju4frbwubfyjuew');
  await expect(page.getByText('Should not exceed 10')).toBeVisible();
});