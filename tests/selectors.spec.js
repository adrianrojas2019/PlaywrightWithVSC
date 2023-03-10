import {test, expect} from '@playwright/test'

test('Selectors Demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com')

    await page.locator('[data-test="username"]').click()
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.pause()
    // using CSS Selector
    await page.locator('#login-button').click();
    
    // ---------------------
    await context.close()
    await browser.close()

})