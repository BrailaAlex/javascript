function sum(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((acc, elem) => acc + elem)
}

console.log(sum([25, 65, 19, 14, 21, 16, 17]));