addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}
addPropertyV2 = (userData, userId) => {
    const sourceData = { id: userId };
    return returnedData = Object.assign(userData, sourceData);
}
addPropertyV3 = (userData, userId) => {
    const cloneData = Object.assign({}, userData)
    const sourceData = { id: userId };
    return returnedData = Object.assign(cloneData, sourceData);
}
addPropertyV4 = (userData, userId) => {
    const cloneData = Object.assign({}, userData)
    return returnedData = {...cloneData, id: userId };
}
const user = {
    name: 'Add',
}
const result = addPropertyV4(user, '3256897414');

console.log(result);