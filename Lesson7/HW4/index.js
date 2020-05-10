function cloneArr(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.slice();
}
numbers = [25, 65, 19, 14, 21, 16, 17];
console.log(cloneArr(numbers));
console.log(numbers);