rootUrl = 'https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/users';

/* getUsersList code here */
const getUsersList = () => {
    return fetch(rootUrl)
        .then(response => response.json());
}

// getUsersList()
//     .then(value => console.log(value));

/* getUserById code here */
const getUserById = UserId => {
        return fetch(`${rootUrl}/${UserId}`)
            .then(response => response.json());
    }
    // getUserById(5)
    //     .then(value => console.log(value));

/* createUser code here */
const createUser = userObj => {
        return fetch(rootUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userObj)
        });
    }
    // const userObj = {
    //     email: "mint.Kemmer@hotmail.com",
    //     firstName: "Ann",
    //     lastName: "Hethaway",
    //     age: 52
    // };
    // createUser(userObj);
    // getUsersList()
    //     .then(value => console.log(value));

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
    // const userObj2 = {
    //     id: "9",
    //     email: "monana.Kemmer@hotmail.com",
    //     firstName: "Monana",
    //     lastName: "Geller",
    //     age: 27
    // };
    // updateUser(7, userObj2);
    // getUsersList()
    //     .then(value => console.log(value));

/* deleteUser code here */

const deleteUser = UserId => {
        return fetch(`${rootUrl}/${UserId}`, {
            method: 'DELETE',
        });
    }
    // deleteUser(13);

export { deleteUser, updateUser, createUser, getUserById, getUsersList };