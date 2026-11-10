import * as playwright from '@playwright/test';
import loginPage from '../pages/loginPage.js';
import users from '../data/users.js';

const test = playwright.test;
const expect = playwright.expect;

test(
    'User can login successfully',
    async function({page}) {

        await loginPage.open(page);

        await loginPage.login(page, users.validUser.username, users.validUser.password);

        await expect(page.getByText('Products')).toBeVisible();

        console.log('Login test completed successfully');
    }
);


test(
    'User cannot login with invalid credentials',
    async function({page}) {

        await loginPage.open(page);

        await loginPage.login(page, users.invalidUser.username, users.invalidUser.password);

        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

        console.log('Invalid login test completed successfully');
    }
)