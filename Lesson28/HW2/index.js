// algo:
//1.

const maxFibonacci = (arg) => {
    if (arg === 1) return 1;
    let resultArr = [0, 1];
    let nextEl = 0;
    while (nextEl <= arg) {
        resultArr.push(nextEl);
        nextEl = resultArr[resultArr.length - 1] + resultArr[resultArr.length - 2];
    }
    return Math.max(...resultArr);
}

// console.log(maxFibonacci(53));