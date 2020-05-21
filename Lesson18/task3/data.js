// pseudo arrays

function argsSum() {
    // return [].reduce.call(arguments, (acc, elem) => acc += elem, 0);
    return [...arguments].reduce((acc, elem) => acc += elem, 0);
}

console.log(argsSum(1, 2, 3, 4));