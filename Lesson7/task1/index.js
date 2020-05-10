const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);

// {

// return numbers.filter(num => num % 3 === 0);

// //const result = numbers.filter(num => {
// // num % 3 === 0;

// // return num % 3 === 0
// // });
// return result;

// // let specialNumbers = [];

// // const result = numbers.forEach(num => {
// //     if (num % 3 === 0) {
// //         specialNumbers.push(num);
// //     }
// // });
// // return specialNumbers;

// };


const arr = [1, 2, 3, 4, 5, 6];
console.log(getSpecialNumbers(arr))