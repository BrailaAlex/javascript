// input: String;
// output: reversed String;


const reverseString = str => {
    if (typeof str !== 'string') return null
    return str.split('').reverse().join('');
};

const text = 'Метод reverse() перевертає масив на місці, змінюючи послідовність';
// const text = 55
console.log(reverseString(text));