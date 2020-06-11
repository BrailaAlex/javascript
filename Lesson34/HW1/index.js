// rootUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/users';

/* getUsersList code here */
function getUsersList() {
    return fetch(rootUrl)
        .then(response => response.json())
};

/* getUserById code here */
function getUserById(UserId) {
    return fetch(`${rootUrl}/${UserId}`)
        .then(response => response.json())
};

function createUser(userObj) {
    return fetch(rootUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj)
    })
};

function updateUser(UserId, userObj) {
    return fetch(`${rootUrl}/${UserId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj)
    })
};

function deleteUser(UserId) {
    return fetch(`${rootUrl}/${UserId}`, {
        method: 'DELETE',
    })
};

export { deleteUser, updateUser, createUser, getUserById, getUsersList };