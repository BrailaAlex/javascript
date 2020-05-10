const reverseArray = arr => {
    if (!Array.isArray(arr)) return null;
    return arr.slice().reverse();
}
const arr = [25, 65, 14, 16];
console.log(reverseArray(arr));