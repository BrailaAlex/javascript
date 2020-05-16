// separate code and tests

export const getSquaredArray = arr =>
    arr.map(num => num * num);

export const GetOddNumbers = arr =>
    arr.filter(num => num % 2 !== 0);

export default (a, b) => a + b;