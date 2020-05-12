const getAdults = obj => {
    let newObj = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const obj = { a: 18, b: 21, c: 13 };
let result = getAdults(obj);
console.log(result);