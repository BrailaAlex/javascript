// input: number
// outptut: array

const superRound = (num, accuracy) => [
    Math.floor((num) * (10 ** accuracy)) / 10 ** accuracy,
    Math.round((num) * (10 ** accuracy)) / 10 ** accuracy,
    Math.ceil((num) * (10 ** accuracy)) / 10 ** accuracy,
    Math.trunc((num) * (10 ** accuracy)) / 10 ** accuracy, +num.toFixed(accuracy)
]
console.log(superRound(7.356, 2));