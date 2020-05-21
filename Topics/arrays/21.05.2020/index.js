// input: Array, function;
// output: array

// algo:
//1. create array
//2. iterate array
//3. if callback condition is ok - add to array, if not - skip

// function filterArrayElements(arr, callback) {
//     let filtered = [];
//     for (let i = 0; i < arr.length; i++) {
//         let res = callback(arr[i], i, arr);

//         if (res) {
//             filtered.push(arr[i]);
//         }
//     }
//     return filtered;

// }

// const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
// let callback = (el) => el % 2 === 0;

// let res = filterArrayElements(numbers, callback);
// console.log(res);

// input: Array, function;
// output: array

// algo:
//1. create array
//2. iterate array
//3. apply callback function to every element and add result element to new array;

function mapArrayElements(arr, callback) {
    let mapped = [];
    for (let i = 0; i < arr.length; i++) {
        let res = callback(arr[i], i, arr);
        mapped.push(res);
    }
    return mapped;
}
let callback = el => 0;

const numbers1 = [4, 1, 2, 5, 100, 40, 3, 44, 55, 1234];
console.log(numbers1.sort((el1, el2) => el1 - el2));

const text = ['test', 'AA', 'bb', 'Ann'];
console.log(text.sort((el1, el2) => el1.localeCompare(el2)));