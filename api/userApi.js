const userApi = {

    getUser: async function(request, userId) {

        const response = await request.get(
            'https://jsonplaceholder.typicode.com/users/' + userId
        );

        return response;

    }

};

export default userApi;