const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }

    let object = {
        userId,
        email: 'userid777@example.com'
    };

    callback = (object);

    const callUser = setTimeout(() => callback, Math.floor(Math.random() * 3 + 1) * 1000);
}

function callback(error, data) {
    console.log(data);

}


requestUserData('userId777', callback);

export { requestUserData };