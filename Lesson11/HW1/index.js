// input: String;
// output: array which cinsists of String elements with titled length;



const splitString = (string, len = 10) => {
    if (typeof string !== 'string') return null
    let strArr = [];
    elemStart = 0;
    while (true) {
        let strArrElem = string.substr(elemStart, len);
        if (strArrElem.length === 0) {
            break;
        };
        if (strArrElem.length < len) {
            strArrElem = strArrElem + '.'.repeat(len - strArrElem.length);
        };
        strArr.push(strArrElem);
        elemStart += len;
    }
    return strArr;
}

// const text = 'These arguments customize the behavior of the function and let app';
// // const text = 55
// const length = 15;

// const res = splitString(text, length)
// console.log(res);