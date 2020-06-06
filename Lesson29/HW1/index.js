const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    let object = {
        userId,
        email: userId + '@example.com',
    };

    const { userId, email } = object;

    setTimeout(callback(null, { userId, email }), Math.floor(Math.random() * 3 + 1) * 1000);
}

// requestUserData('broken');

export { requestUserData };