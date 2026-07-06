import { test, expect } from '@playwright/test';
import buzzData from '../../testdata/buzz.json';

test('Post a message in Buzz after login', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill(buzzData.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(buzzData.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.getByRole('link', { name: 'Buzz' }).click();
  await expect(page.getByRole('heading', { name: 'Buzz' })).toBeVisible();

  await page.getByRole('textbox', { name: "What's on your mind?" }).fill(buzzData.message);
  await page.getByRole('button', { name: 'Post' }).click();

  await expect(page.getByText('Successfully Saved')).toBeVisible();
});
