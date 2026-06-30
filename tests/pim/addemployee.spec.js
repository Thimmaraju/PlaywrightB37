import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) =>{

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

})

test('verify add employee with basic details', async ( {page }) => {

  await page.getByRole('textbox', { name: 'First Name' }).fill('lakshmikanth');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('D');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({timeout : 30000});
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