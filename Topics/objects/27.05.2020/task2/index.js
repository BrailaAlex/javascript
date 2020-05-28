// compare function
// input: two objects
// output: boolean
// algo:
// 1. accept two objects.
// 2. transforming them to arrays via Object.entries.
// 3. compare length of the arrays.
// 4. compare every element of array with each - other.

//1. Compare two objects by length, if === return true/flse.
//2. Compare two objects by property, if === return true/false.

let obj1 = {
    name: "Andrey",
    age: 20,
    city: 'Kiev',
    location: 'Kiev',
};

let obj2 = {
    name: "Tom",
    age: 23,
    city: 'Kiev',
    location: 'Kiev',
};

let obj3 = {
    name: "Tom",
    age: 23,
}

//1. Compare two objects by length, if === return true/flse.
//2. Compare keys and compare values. If not equal - return false.

const compareObjects = (obj1, obj2) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length)
        return false;

    return keys1.reduce((acc, key) => {
        if (!acc) return false;
        return obj1[key] === obj2[key];
    }, true);
}

// const compareObjects = (obj1, obj2) => {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length)
//         return false;

//     return keys1.reduce((acc, key) => {
//         if (acc === false) return false;// when we first meet false, on every next step f will return false, cause it
//         let value1 = obj1[key]; // will not reach comparing
//         let value2 = obj2[key];

//         console.log('value1 ' + value1);
//         console.log('value2 ' + value2);

//         if (value1 !== value2) {
//             console.log(acc);
//             return false;
//         } else {
//             console.log(acc);
//             return true;
//         }
//     }, true);
// }

console.log(compareObjects(obj1, obj2))