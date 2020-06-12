// function positiveSum(arr) {
//     let newArr = [...arr];
//     return newArr.reduce((acc, el) => {
//         return (el >= 0) ?
//             acc += el : acc
//     }, 0);
// }

// console.log(positiveSum([0, -2, -3, -2]));

const libr1 = { "Java": 10, "Ruby": 80, "Python": 65 }
const libr2 = { "Hindi": 60, "Dutch": 93, "Greek": 71 }
const libr3 = { "C++": 50, "ASM": 10, "Haskell": 20 }

function myLanguages(results) {
    return Object.entries(results)
        .filter(arr => arr[1] >= 60)
        .sort((a, b) => b[1] - a[1])
        .map(arr => arr[0]);
}

console.log(myLanguages(libr1));

// function divisors(integer) {
//     let divArr = [];
//     for (let i = 2; i < integer; i++) {
//         if (integer % i === 0) {
//             divArr.push(i);
//         }
//     }
//     return (divArr.length === 0) ?
//         `${integer} is prime` :
//         divArr;
// };

// console.log(divisors(12));