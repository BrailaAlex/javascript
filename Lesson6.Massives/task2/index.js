// Перебор массива


// let sumOfNumbers = 0;
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sumOfNumbers += numbers[i];
// }
// const numbers = [11, 22, 44, 55, 66];

function getSum(arr) {
    if (!Array.isArray(arr)) return null;

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// console.log('result: ' + getSum(numbers));