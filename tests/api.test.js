import { test, expect } from '@playwright/test';
import userApi from '../api/userApi.js';

test(
    'Get user through API',

    async function({ request }) {

        const response = await userApi.getUser(
            request,
            1
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

         console.log(body);

        expect(body.id).toBe(1);

    }
);