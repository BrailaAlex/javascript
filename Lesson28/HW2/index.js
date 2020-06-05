// algo:
//1.

const maxFibonacci = (arg) => {
    if (arg === 1) return 1;
    let resultArr = [0, 1];
    let nextEl = 0;
    while (nextEl <= arg) {
        resultArr.push(nextEl);
        console.log(nextEl);
        nextEl = resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2];
    }
    return Math.max(...resultArr);
}

// const maxFibonacci = (n) => {
//     // return arg <= 1 ? arg : maxFibonacci(arg - 1);
//     return n <= 1 ? n : maxFibonacci(n - 2) + maxFibonacci(n - 3)

// }
console.log(maxFibonacci(123));

// export { maxFibonacci };