// input: number
// output: array

const multiRound = num => matharray = [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100, +num.toFixed(2)
]

let num = -17.5555;
let result = multiRound(num);
console.log(result)