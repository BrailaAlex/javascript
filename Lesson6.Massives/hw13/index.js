// function uniqueCount(array) {
//     if (!Array.isArray(array)) return null;
//     const uniqueSet = [...new Set(array)];
//     return uniqueSet.length;
// }
// console.log(removeDuplicates([25, 65, 32, 65, 95, 75, 85, 95]));
function uniqueCount(array) {
    if (!Array.isArray(array)) return null;
    let uniqueArr = [];

    for (let i = 0; i < array.length; i++) {

        let unique = false;

        for (let j = 0; j < uniqueArr.length; j++) {
            if (array[i] == uniqueArr[j]) {
                unique = true;
            }
        }
        if (!unique) {
            uniqueArr.push(array[i]);
        }
    }

    return uniqueArr.length - 1;
}
console.log(uniqueCount([25, 65, 32, 65, 95, 75, 85, 95]));

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
// console.log(removeDuplicates([25, 65, 32, 65, 95, 75, 85, 95]))