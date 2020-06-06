const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }

    const object = {
        userId,
        email: userId + '@example.com'
    };

    callback = (object);

    const callUser = setTimeout(() => callback, Math.floor(Math.random() * 3 + 1) * 1000);
}

// function callback(error, data) {
//     console.log(data);

// }


// requestUserData('userId777', callback);

export { requestUserData };