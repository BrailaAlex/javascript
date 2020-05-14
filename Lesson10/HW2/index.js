// input: array
// outptut: array of random values

const getRandomNumbers = (length, start, end) => {
    if ((end - start) < 1 && Math.ceil(start) === Math.ceil(end)) return null
    let arr = [];
    arr.length = length;
    return arr.fill().map(num => {
        num = Math.random() * (end - start) + start;
        if (num >= 0) return Math.ceil(num);
        return Math.floor(num);
    })
}

console.log(getRandomNumbers(7, 0.2, 1.1));
// const getRandomNumbers = (length, start, end) => {
//     const noNumbersBetween = (end - start < 1) && Math.ceil(end) === Math.ceil(start);
//     if (start > end || noNumbersBetween) return null;


//     return Array(length)
//         .fill().map(i => Math.floor(Math.random() * (end - start)) + start);
// }


// console.log(getRandomNumbers(5, -1, 3));









const someArr = [17.1, '25.2text', '31.3 some', null, NaN, Infinity, undefined];