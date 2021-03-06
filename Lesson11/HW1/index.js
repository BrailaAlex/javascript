// input: String;
// output: array which cinsists of String elements with titled length;



const splitString = (text, len = 10) => {
    if (typeof text !== 'string') return null
    const strArr = [];
    let elemStart = 0;
    while (true) {
        let chunk = text.substr(elemStart, len);
        if (chunk.length === 0) {
            break;
        };
        if (chunk.length < len) {
            chunk = chunk + '.'.repeat(len - chunk.length);
        };
        strArr.push(chunk);
        elemStart += len;
    }
    return strArr;
}

const text = 'These arguments customize the behavior of the function and let app';
// const text = 55
const length = 15;

const res = splitString(text, length)
console.log(res);