// baseUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/users';

/* getUsersList code here */
function getUsersList() {
    return fetch(baseUrl)
        .then(response => response.json())
};

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