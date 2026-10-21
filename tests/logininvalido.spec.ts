
import { expect, test } from "@playwright/test";

test('login con usuario inválido', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
  
    await page.getByRole('textbox', { name: 'Username' }).fill('UsuarioX');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
  
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });