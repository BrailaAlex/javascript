import getSum, { getSquaredNumbers, GetOddNumbers } from './calculator.js'

it('should retern square numbers of array', () => {
    const result = getSquaredNumbers([1, 2, 3]);

    expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
    const result = GetOddNumbers([1, 2, 3, 4, 5]);

    expect(result).toEqual([1, 3, 5]);
});


it('shoulf return sum of array elements', () => {
    const sumOfElements = getSum(6, 5);

    expect(sumOfElements).toEqual(11);
});