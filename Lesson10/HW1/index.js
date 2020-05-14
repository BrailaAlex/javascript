// input: array
// output: number

const getTotalPrice = arr => {
    const arrSum = arr.reduce((acc, num) => acc += num);
    return sum = '$' + Math.floor(arrSum * 100) / 100;
}

const arr = [17.256, 17.35, 23];
let result = getTotalPrice(arr)
console.log(result)