const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    let object = {
        userId,
        email: userId + '@example.com',
    };

    callback = (object);
    setTimeout(callback, Math.floor(Math.random() * 3 + 1) * 1000);
}

// requestUserData('broken');

export { requestUserData };