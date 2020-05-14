//input: array
//output: filtered array
const getFiniteNumbers = arr => arr.filter(num => Number.isFinite(num))
    //input: array
    //output: filtered array
const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num))
    //input: array
    //output: filtered array
const getNaN = arr => arr.filter(num => Number.isNaN(num))
    //input: array
    //output: filtered array
const getNaNV2 = arr => arr.filter(num => isNaN(num))
    //input: array
    //output: filtered array
const getIntegers = arr => arr.filter(num => Number.isInteger(num))




const arr = [17.23, '17.35', 'text', 23, NaN, 'NaN', undefined, null];
let result = getIntegers(arr)
console.log(result)




// Number.isNaN('text'); //
// isNaN('text');
// isNaN('NaN');

// const parseArray = arr => result = arr
//     .map(num => Number.parseFloat(num))

// const someArr = [17.1, '25.2text', '31.3 some', null, NaN, Infinity, undefined];

// console.log(parseArray(someArr));