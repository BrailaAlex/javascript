// input: array
// output: number

const getTotalPrice = arr => '$' + Math
    .floor(arr.reduce((acc, num) => acc += num, 0) * 100) / 100;

const arr = [17.256, 17.35, 23];
let result = getTotalPrice(arr)
console.log(result)