// input: number
// output: array

const multiRound = num => {
    return matharray = [
        Math.floor(num),
        Math.round(num),
        Math.ceil(num),
        Math.trunc(num), +num.toFixed()
    ]
}

const num = 17.55;
let result = multiRound(num);
console.log(result)