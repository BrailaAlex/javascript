//input: 2 arrays
//output: object

//algo
//1. iterate keysList
//2. get value by index & put to the object

function buildObject(keysList, valuesList) {
    return keysList.reduce((acc, key, index) => ({...acc,
        ... {
            [key]: valuesList[index]
        }
    }), {})

}

let keys = ['name', 'city', 'price'];
let values = ['Denis', 'Lviv', 300];

console.log(buildObject(keys, values))

// function buildObject(keysList, valuesList) {
//     return keysList.reduce((acc, key, index) => {
//         let value = valuesList[index];
//         console.log('acc', acc);
//         console.log('index' + index);
//         console.log('KEY' + key);
//             console.log('Value' + value);
//         let obj = Object.assign({}, {
//             [key]: value
//         });
//         console.log('Obj', obj);
//         console.log();
//         return obj;
//     }, {});
// }
// let keys = ['name', 'city', 'price'];
// let values = ['Denis', 'Lviv', 300];
// console.log(buildObject(keys, values));

// function buildObject(keysList, valueList) {
//     return keysList.reduce((acc, key, index) => {
//         let obj = {...acc,
//             ... {
//                 [key]: valueList[index]
//             },
//         };
//         return obj;
//     }, {});
// }
// let keys = ['name', 'city', 'price'];
// let values = ['Denis', 'Lviv', 300];
// console.log(buildObject(keys, values));