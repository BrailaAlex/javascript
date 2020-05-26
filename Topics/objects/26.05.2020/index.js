// input: object, string
// output: object
function addPropertyV1(userData, userId) {
    return userData.id = userId;

};

function addPropertyV2(userData, userId) {
    return Object.assign(userData, { id: userId });

};

function addPropertyV3(userData, userId) {
    return Object.assign({}, userData, { id: userId });

};

function addPropertyV4(userData, userId) {
    return {...userData, id: userId };

};

let userData = {
    name: 'Andrey',
    city: 'Lviv',
    age: 20,
}

let userId = '1111'

console.log(addPropertyV4(userData, userId));
console.log(userData);