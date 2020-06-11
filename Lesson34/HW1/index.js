rootUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/users';

/* getUsersList code here */
const getUsersList = () => {
    return fetch(rootUrl)
        .then(response => response.json());
}

/* getUserById code here */
const getUserById = UserId => {
    return fetch(`${rootUrl}/${UserId}`)
        .then(response => response.json());
}

/* createUser code here */
const createUser = userObj => {
    return fetch(rootUrl, baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userObj)
    });
}

/* updateUser code here */

const updateUser = (UserId, userObj) => {
    return fetch(`${rootUrl}/${UserId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userObj)
    });
}

/* deleteUser code here */

const deleteUser = UserId => {
    return fetch(`${rootUrl}/${UserId}`, {
        method: 'DELETE',
    });
}