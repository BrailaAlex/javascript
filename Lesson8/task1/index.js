// transformToObject

// const prop = 'my'

// const obj = {
//     name: 'Tom',
//     age: '17',
//     interest: 'football',
//     'my name': 'Bob',
//     [prop + 'name']: 'value'
// };

// // console.log(obj.age); //17

// // obj.age = 18;

// // console.log(obj.age);

// console.log(obj['my name']);
// console.log(obj[prop + 'name'] );

const transformToObject = arr => {
    let obj = {};

    arr.forEach(el => obj[el] = el);

    return obj;
};

const arr = [1, 'text']
const result = transformToObject(arr);
console.log(result);

// const user = {
//     name: 'Tom',
// };

// user.name = 'Bob';

// console.log(user.name);


// [1, 'text'] => {1:1, text: 'text'}

// const a = {};
// const b = a ;

// console.log(a == b);

// const name = 'Tom';

// const user = {
//     name, // вместо name:name,
// };