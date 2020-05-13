// getAdults


// const user = {
//     name: 'Tom',
//     key: 17,
// };

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.keys(user));

const user = {
    'Tom': 17,
    'john Doe': 19,
    'Bob': 18,
};

const getAdults = usersObj => Object.entries(usersObj)
    .filter(user => user[1] >= 18) // возвращаем массивы со вторым элементом >= 18
    .map(key => key[0]); // // возвращаем элементы массивов с 0 индексом

console.log(getAdults(user));