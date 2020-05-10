const cloneArr = (arr) => {
    if (!Array.isArray(arr)) return null;
    return cloneArray = [...arr];
}
console.log(cloneArr([25, 65, 19, 14, 21, 16, 17]));