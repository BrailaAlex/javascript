export function sumOfSquares() {
    // return [].reduce.call(arguments, (acc, elem) => acc += elem, 0);
    return [...arguments].reduce((acc, elem) => acc += elem * elem, 0);
}

console.log(sumOfSquares(1, 2, 3, 4));