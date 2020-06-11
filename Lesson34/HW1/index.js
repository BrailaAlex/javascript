// rootUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/users';

/* getUsersList code here */
export const getUsersList = () => {
    return fetch(rootUrl)
        .then(response => response.json());
};

/* getUserById code here */
export const getUserById = UserId => {
    return fetch(`${rootUrl}/${UserId}`)
        .then(response => response.json());
};

export const createUser = userObj => {
    return fetch(rootUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userObj)
    });
};

export const updateUser = (UserId, userObj) => {
    return fetch(`${rootUrl}/${UserId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userObj)
    });
};

export const deleteUser = UserId => {
    return fetch(`${rootUrl}/${UserId}`, {
        method: 'DELETE',
    });
};

// export { deleteUser, updateUser, createUser, getUserById, getUsersList };