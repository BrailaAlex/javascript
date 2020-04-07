let result = 0;

function findDivCount(a, b, n) {
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            result++;
        } else if (result === 0) {
            return 0;
        }
    }
    return result;
}