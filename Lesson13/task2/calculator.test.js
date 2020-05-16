import { getSquaredNumbers, GetOddNumbers } from './calculator.js'
// const getSquaredNumbers = arr =>
//     arr.map(num => num * num);

it('should keep odd numbers only', () => {
    const result = GetOddNumbers([1, 2, 3]);
    expect(result).toEqual([1, 3]);
});
it('should retern square numbers of array', () => {
    const result = getSquaredNumbers([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

import getSum from './calculator.js'

it('shoulf return sum of array elements', () => {
    const sumOfElements = getSum(6, 5);
    expect(sumOfElements).toEqual(11);
});