// function removeDuplicates(array) {
//     if (!Array.isArray(array)) return null;
//     const uniqueSet = [...new Set(array)];
//     return uniqueSet;
// }
// console.log(removeDuplicates([25, 65, 32, 65, 95, 75, 85, 95]));
// function removeDuplicates(array) {
//     if (!Array.isArray(array)) return null;
//     let uniqueArr = [];

//     for (let i = 0; i < array.length; i++) {

//         let unique = false;

//         for (let j = 0; j < uniqueArr.length; j++) {
//             if (array[i] == uniqueArr[j]) {
//                 unique = true;
//             }
//         }
//         if (!unique) {
//             uniqueArr.push(array[i]);
//         }
//     }

//     return uniqueArr
// }

// function removeDuplicates(array) {

//     let uniqueArr = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {

//         }
//         if (array[i] !== uniqueArr[j]) {
//             uniqueArr.push(array[i])
//         };
//     }
//     return uniqueArr;
// }

const includes = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return false;
        }
    }
    return true;
};
const removeDuplicates = arr => {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (includes(unique, arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
};

console.log(removeDuplicates([25, 65, 32, 65, 95, 75, 85, 95]))