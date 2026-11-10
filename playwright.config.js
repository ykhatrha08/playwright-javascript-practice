import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    retries: 1,

    workers: 2,

    reporter: 'html',

    use: {

        baseURL: 'https://www.saucedemo.com',

        headless: true,

        screenshot: 'only-on-failure',

        trace: 'on-first-retry'

    }

});