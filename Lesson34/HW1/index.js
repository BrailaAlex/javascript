const baseUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/users';

/* getUsersList code here */
function getUsersList() {
    return fetch(baseUrl)
        .then(response => response.json())
};
// getUsersList()
//     .then(value => console.log(value))

/* getUserById code here */
function getUserById(userId) {
    return fetch(`${baseUrl}/${userId}`)
        .then(response => response.json())
};

function createUser(userObj) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj)
    })
};

// const newUserData = {
//     email: "cool@email.com",
//     firstName: 'Iron',
//     lastName: 'Man',
//     age: 42,
// };
// createUser(newUserData)
//     .then(() => console.log('User created'));

function updateUser(userId, userObj) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj)
    })
};

function deleteUser(userId) {
    return fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE',
    })
};

export { deleteUser, updateUser, createUser, getUserById, getUsersList };