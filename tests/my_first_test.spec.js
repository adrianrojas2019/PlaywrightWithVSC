const { test, expect } = require('@playwright/test');

test('My First Test', async ({page})=>{

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})

/* let {hello, helloworld} = require('./demo/hello')
//import { hello, helloworld } from './demo/hello';

console.log(hello());

console.log(helloworld()); */