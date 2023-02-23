import { test, expect } from '@playwright/test'
//npx playwright test ./tests/assertions.spec.js --project chromium --headed
test('Assetions Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    // ASSERTIONS
    // check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }
    // check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    // check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //await expect(page.locator('selector')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //Check Url of the page
    await expect(page).toHaveURL(/kitchen.applitools.com/);
    await expect(page).toHaveTitle(/.*Kitchen/);

    //Check Page matches screenshot Visual Validation
    await expect(page).toHaveScreenshot();
})