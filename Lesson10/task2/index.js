// multiRound

// num => []

// const multiRound = num => [
//     Math.round(num * 100) / 100,
//     Math.floor(num * 100) / 100,
//     Math.ceil(num * 100) / 100,
//     Math.trunc(num * 100) / 100, +num.toFixed(2)
// ];

// console.log(multiRound(-Math.PI))

//input: array
//output: customized array
const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));

//input: array
//output: customized array
const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));
//input: array
//output: customized array
const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));
//input: array
//output: customized array
const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));

const arr = [17.23, '17.35', 'text', 23, NaN, 'NaN', undefined, null];
let result = getParsedFloats(arr)
console.log(result)