// Перебор массива


// let sumOfNumbers = 0;
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sumOfNumbers += numbers[i];
// }
const numbers = [11, 22, 44, 55, 66];

function getSum(arr) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    return sum;
    if (!Array.isArray(arr)) return null;
}

console.log('result: ' + getSum(numbers));