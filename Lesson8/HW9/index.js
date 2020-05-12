const pickProps = (obj, arr) => {
    let newObj = {};
    for (let key in obj) {
        for (let i of arr) {
            if (i == key) {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj;
}

const obj = { a: 1, b: 2, c: 3 };
const arr = ['a', 'b'];
let result = pickProps(obj, arr);
console.log(result);