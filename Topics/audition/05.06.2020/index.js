function getSum(a, b) {
    // let result;
    // result = (a === b) ? a :
    //     (a < b) ?
    //     sum(a, b) :
    //     sum(b, a);
    // return result;
    return ((a === b) ? a :
        (a < b) ?
        sum(a, b) :
        sum(b, a));
}

function sum(from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(120, 120));