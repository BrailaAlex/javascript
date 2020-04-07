let result = 0

function getSum(a, b) {
    for (i = a; i <= b; i++) {
        if (i % 2 === 0) {
            result += i
        }
    }
    return result;
}
getSum(4, 18)