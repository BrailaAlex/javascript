function compareSums(a, b, c, d) {
    if (sum1 > sum2) {
        return true;
    } else {
        return false;
    }

    function sum1(a, b) {
        return a + b;
    }

    function sum2(c, d) {
        return c + d;
    }
}


compareSums(4, 3, 7, 1);