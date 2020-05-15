// input: array
// outptut: array of random values

const getRandomNumbers = (length, start, end) => {
    if ((end - start) < 1 && Math.ceil(start) === Math.ceil(end) || start > end) return null
    let arr = [];
    arr.length = length;
    return arr.fill().map(num => {
        num = Math.random() * (end - start) + start;
        if (num >= 0) return Math.ceil(num);
        return Math.floor(num);
    })
}

console.log(getRandomNumbers(7, -33, 22));










const someArr = [17.1, '25.2text', '31.3 some', null, NaN, Infinity, undefined];