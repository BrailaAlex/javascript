// const text = 'message'

// const myMessage = `
// The text is ${text.toUpperCase()},
// And something Else.
// `;
// const myMessage = `The text is ${text.toUpperCase()},
// And something Else.`;

// console.log(text.charAt(10));

const someText = 'Lorem ipsum is simply dummy text of the printing and typesetting';
const length = 15;
//splitText
// splitString('abcd efgh', 4) => 'Abcd\n efg\nH']

const splitText = (text, len = 10) => {
    if (typeof text !== 'string') return null;
    const strArr = [];
    let startPosition = 0
    while (true) {
        let chunk = text.substr(startPosition, len)
        if (chunk.length === 0) { //проверка осуществляется перед действиями с эл-ом
            break; //чтобы не вызвать ошибку при работе с несуществующим эл-ом
        }
        // strArr.push(chunk)
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;

    }
    return strArr.join('\n');
    // return strArr.map(num => num[0].toUpperCase() + num.slice(1)).join('\n');
};
const res = splitText(someText, length);
console.log(res);
// 1. 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg']
// => Abcd/nEfg