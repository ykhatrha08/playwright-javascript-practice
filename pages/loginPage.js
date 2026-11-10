const loginPage = {

    open: async function(page) {

        await page.goto('/');

    },

    login: async function(page, username, password) {

        await page
            .getByPlaceholder('Username')
            .fill(username);

        await page
            .getByPlaceholder('Password')
            .fill(password);

        await page
            .getByRole('button', { name: 'Login' })
            .click();

    }

};

export default loginPage;