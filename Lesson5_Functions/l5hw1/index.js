let result = 0

function getSum(a, b) {
    for (a; a <= b; a++) {
        if (a % 2 === 0) {
            result += a
        }
    }
    return result;
}
getSum(4, 18)