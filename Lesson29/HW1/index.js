const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    let object = {
        userId,
        email: userId + '@example.com',
    };

    setTimeout(callback(null, object), Math.floor(Math.random() * 3 + 1) * 1000);
}

// function callback(error, data) {
//     console.log(data);

// }


// requestUserData('broken', callback);

export { requestUserData };