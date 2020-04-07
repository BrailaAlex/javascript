function findDivCount(a, b, n) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            result++;
        } else if (result === 0) {
            return 0;
        }
    }
    return result;
}
// findDivCount(3, 12, 3);
// console.log(result);