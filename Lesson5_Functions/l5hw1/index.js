// let result = 0

// function getSum(a, b) {
//     for (a; a <= b; a++) {
//         if (a % 2 === 0) {
//             result += a
//         }
//     }
//     return result;
// }

function getSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
getSum(4, 18)

// console.log(getSum(5, 25));