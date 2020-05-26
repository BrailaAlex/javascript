// input: object, object
// output: object
function mergePropertyV1(obj1, obj2) {
    return Object.assign(obj1, obj2);

};

function mergePropertyV2(obj1, obj2) {
    return Object.assign(obj2, obj1);

};

function mergePropertyV3(obj1, obj2) {
    return {...obj1, ...obj2 }

};

function mergePropertyV4(obj1, obj2) {
    return {...obj2, ...obj1 };

};

let obj1 = {
    name: 'Andrey',
    phone: '093555555',
    price: 2000,
};
let obj2 = {
    name: 'Denis',
    city: 'Lviv',
    age: 20,
};


console.log(mergePropertyV4(obj1, obj2));