import {test, expect} from '@playwright/test'

//npx playwright test ./tests/login.spec.js --project chromium --headed

test('Login demo test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');
    await page.locator('text=Sign in').click();
    await page.locator('text=ACME').isVisible();
 })

test('Login demo test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();
    await page.locator('p:has-text("Paul Collings")').click()
    await page.locator('text=Logout').click();
    await page.close();
 })

 test.only('Login demo test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.locator('input[name="Email"]').click();
    await page.locator('input[name="Email"]').press('Control+a');
    await page.locator('input[name="Email"]').fill('admin@yourstore.com');
    await page.locator('input[name="Password"]').click();
    await page.locator('input[name="Password"]').press('Control+a');
    await page.locator('input[name="Password"]').fill('admin');
    await page.locator('text=Log in').click();
    await page.locator('#nopSideBarPusher i').click();
    await page.locator('text=Logout').click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.close();
 })