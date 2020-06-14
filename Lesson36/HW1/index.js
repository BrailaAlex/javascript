//algo:
//1. create getUsersBlogs
//2. create function to request users data
//3. use it for every user
//4. reject promise if there is an error while request.
const fetchUsers = async users => {
    return await users.map(userId => fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Failed to load data');
        })
        .then(user => user.blog));
}

// const usersArr = ['facebook', 'google'];
const getUsersBlogs = async usersArr => {
    try {
        const usersData = await Promise.all(fetch(usersArr));
        return usersData;
    } catch (err) {
        console.log(err);
    }
};
// getUsersBlogs(usersArr)
//     .then(list => console.log(list));

export { getUsersBlogs };