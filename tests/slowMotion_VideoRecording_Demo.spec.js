import {test, expect, chromium} from '@playwright/test'

// on playwright.config.js file 
/* use: {
     video: 'on', 
        launchOptions: {
            slowMo: 1000
        } */
// npx playwright test ./tests/slowMotion_VideoRecording_spec.js --project chromium --headed
test('Slow motion and video recording demo', async() => {

    const browsers = await chromium.launch({
        slowMo: 500,
        headless: false
    })
    const context = await browsers.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    })
    const page = await context.newPage()

    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.locator('input[name="Email"]').click();
    await page.locator('input[name="Email"]').press('Control+a');
    await page.locator('input[name="Email"]').fill('admin@yourstore.com');
    await page.locator('input[name="Password"]').click();
    await page.locator('input[name="Password"]').press('Control+a');
    await page.locator('input[name="Password"]').fill('admin');
    await page.locator('text=Log in').click();

    await context.close()

})