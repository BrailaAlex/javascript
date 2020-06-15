//algo:
//1. create getUsersBlogs
//2. create function to request users data
//3. use it for every user
//4. reject promise if there is an error while request.
const fetchUsers = users => {
    return users.map(async userId => {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (response.ok) {
            const user = await response.json();
            return user.blog;
        }
        throw new Error('Failed to load data')
    });
}

const getUsersBlogs = usersArr => {
    try {
        return Promise.all(fetchUsers(usersArr));
    } catch (err) {
        console.log(err);
    }
};

// const usersArr = ['facebook', 'google'];
// getUsersBlogs(usersArr)
//     .then(list => console.log(list));

export { getUsersBlogs };