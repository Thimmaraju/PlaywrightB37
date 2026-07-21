import { test, expect } from '@playwright/test';

const creds = {
    set1: { username: "Admin", password: "gvnerkjbg" },
    set2: { username: "jerhbg", password: "admin123" },
    set3: { username: "tgjbhjb", password: "gvnerkjbg" },
}

for (let data in creds) {


    test(`Verify login with invalid credentials - ${data}`, async function ({ page }) {
        await page.goto('/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill(creds[data].username);
        await page.getByRole('textbox', { name: 'Password' }).fill(creds[data].password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Invalid credentials')).toBeVisible();
        await page.close()

    });

}

