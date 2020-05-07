function compareSums(a, b, c, d) {
    if (sum1() > sum2()) {
        return true;
    } else {
        return false;
    }

    function sum1() {
        return a + b;
    }

    function sum2() {
        return c + d;
    }
}
console.log(compareSums(4, 5, 7, 1));