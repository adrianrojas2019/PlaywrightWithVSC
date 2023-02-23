import { test, expect } from '@playwright/test'

test.skip('skip this test', async ({ page }) => {
    // This test will be skipped
});

test('not yet ready', async({ page }) => {
    test.fail();
});

test.fixme('test to be fixed', async({ page }) => {
});

test('slow test', async({ page }) => {
    test.slow();
});
//npx playwright test ./tests/AnnotaionsAndTags.spec.js --project chromium --grep "@smoke"
test('focus this test @smoke', async({ page }) => {
    // Run only focused tests in the entire project
});