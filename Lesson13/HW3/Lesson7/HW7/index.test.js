import { filterNames } from './index.js'

it('should return an array', () => {
    const result = filterNames(['Jane', 'Violetta', 'Janetta', 'Kate', 'Matador'], 'ta');
    const checkType = Array.isArray(result);
    expect(checkType).toEqual(true)
})
it('should check array length', () => {
    const result = filterNames(['Jane', 'Violetta', 'Janetta', 'Kate', 'Matador'], 'ta');
    expect(result.length).toEqual(3)
})
it('should check type of array elements', () => {
    const result = filterNames(['Jane', 'Violetta', 'Janetta', 'Kate', 'Matador'], 'ta');
    const checkTypeOfNum = result.every(i => typeof i === 'string')
    expect(checkTypeOfNum).toEqual(true)
})