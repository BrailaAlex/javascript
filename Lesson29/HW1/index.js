const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }

    // const object = {
    //     userId,
    //     email: userId + '@example.com'
    // };

    callback({
        userId,
        email: `${userId}@example.com`,
    });

    setTimeout(callback, Math.floor(Math.random() * 3 + 1) * 1000);
};


// const requestUserData = (userId, callback) => {
//     if (userId == 'broken') {
//         callback(null, 'Failed to load user data');
//         return;
//     }
//     let object = {
//         userId,
//         email: 'userid777@example.com'
//     };

//     callback = (object);
//     setTimeout(callback, Math.floor(Math.random() * 3 + 1) * 1000);
// }


export { requestUserData };