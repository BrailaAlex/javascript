//getMaxabsolutNumber

// [2, -5, -78, -99] =>99

// const getMaxabsolutNumber = arr => {
// 
// let max = -Infinity;

// arr.forEach(num => {
//     if (Math.abs(num) > max) {
//         max = Math.abs(num)
//     }
// })
// return max;

// }

// const getMaxAbsoluteNumber = arr => {
//     if (!Array.isArray(arr) || arr.length === 0) return null;
//     const absoluteValues = arr
//         .map(num => Math.abs(num));

//     return max = Math.max(...absoluteValues);
// }


// input: array
// output: max abs number
const getMaxAbsoluteNumber = arr => {
        if (!Array.isArray(arr) || arr.length === 0) return null;
        return absMax = arr.reduce((a, b) => Math.max(Math.abs(a), Math.abs(b)));
    }
    // 1 - get absolute values
    // 2 - find max

let arr = [-7, 2, -5, -78, 32, -99, -101.35];
console.log(getMaxAbsoluteNumber(arr));