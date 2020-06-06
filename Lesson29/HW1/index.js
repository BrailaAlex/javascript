const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }

    const object = {
        name: 'John',
        age: 17,
        userId,
        email: userId + '@example.com'
    };

    const dataObj = {
        userId: object.userId,
        email: object.email
    }

    setTimeout(callback(null, dataObj), Math.floor(Math.random() * 3 + 1) * 1000);
}

// function callback(error, data) {
//     console.log(data);

// }


// requestUserData('Alex', callback);

export { requestUserData };