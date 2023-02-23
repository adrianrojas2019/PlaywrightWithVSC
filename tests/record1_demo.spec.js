import { test, expect } from '@playwright/test';

//npx playwright test ./tests/record1_demo.spec.js --project=chromium --headed
test('Record Demo Test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button123"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/')
});