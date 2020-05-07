function removeDublicates(array) {
    const uniqueSet = [...new Set(array)];
    return uniqueSet;
}
// console.log(removeDublicates([25, 65, 32, 65, 95, 75, 85, 95]));
// function uniqueCount(array) {

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

// function uniqueCount(array) {

//     let uniqueArr = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < uniqueArr.length; j++) {
//             if (array[i] !== uniqueArr[j]) {
//                 uniqueArr.push(array[i]);
//             }
//         }
//     }
//     return uniqueArr;
// }
console.log(uniqueCount([25, 65, 32, 65, 95, 75, 85, 95]))