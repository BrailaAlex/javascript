const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) return null;
    return arr.map(num => num % 2 === 0 ? num + delta : num);
}

// function increaseEvenEl(num, delta) {
//     if (!Array.isArray(num)) return null;
//     return num.map(num => {
//         if (num % 2 === 0)
//             return num = num + delta;
//         return num;
//     });
// }
// let numbers = ([2, 5, 6, 8, 11, 9, 4]);
// let increaser = 10;
// console.log(increaseEvenEl(numbers, increaser));
console.log(increaseEvenEl([25, 65, 19, 14, 21, 16, 17], 10));