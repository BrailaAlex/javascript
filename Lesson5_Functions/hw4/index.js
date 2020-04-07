function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}

function sum(a, b) {
    return a + b;
}

function sum(c, d) {
    return c + d;
}

compareSums(4, 3, 7, 1);