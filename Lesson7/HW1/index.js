const squareArray = arr => {
    if (!Array.isArray(arr)) return null;
    return arr.map(num => num * num);
}
const arr = [25, 65, 14, 16];
console.log(squareArray(arr));