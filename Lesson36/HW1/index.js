//algo:
//1. create getUsersBlogs
//2. create function to request users data
//3. use it for every user
//4. reject promise if there is an error while request.

// const fetchUsers = users => {
//     return await users.map(userId => fetch(`https://api.github.com/users/${userId}`)
//         .then(response => {
//             if (response.ok) return response.json();
//             throw new Error('Failed to load data');
//         })
//         .then(user => user.blog));
// }

const usersArr = ['facebook', 'google'];
const getUsersBlogs = async usersArr => {
    try {
        let users = await usersArr.map(userId => fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Failed to load data');
            })
            .then(user => user.blog));
        const usersData = Promise.all(users);
        return usersData;
    } catch (err) {
        console.log(err);
    }
};
getUsersBlogs(usersArr)
    .then(list => console.log(list));

export { getUsersBlogs };