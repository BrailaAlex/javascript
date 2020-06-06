const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }

    setTimeout(() => callback({
        userId,
        email: `${userId}@example.com`,
    }), Math.floor(Math.random() * 3 + 1) * 1000);
};


export { requestUserData };