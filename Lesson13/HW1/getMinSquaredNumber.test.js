import getMinSquaredNumber from './getMinSquaredNumber.js'



it('if we will give an ampty array', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
});

it('if we will give a string', () => {
    const result = getMinSquaredNumber('hubrhubr')

    expect(result).toEqual(null);
});

it('should get a square of a min abs number', () => {
    const result = getMinSquaredNumber([-2, -777, -2.35, -4.21]);

    expect(result).toEqual(4);
});