const playwright = require('@playwright/test');

const test = playwright.test;
const expect = playwright.expect;

test(
    'User can login successfully',

    async function({ page }) {

        await page.goto('https://www.saucedemo.com');

        await page
            .getByPlaceholder('Username')
            .fill('standard_user');

        await page
            .getByPlaceholder('Password')
            .fill('secret_sauce');

        await page
            .getByRole('button', { name: 'Login' })
            .click();

        await expect(
            page.getByText('Products')
        ).toBeVisible();

    }
);