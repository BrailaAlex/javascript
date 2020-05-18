//input: array of numbers;
//output: array with squared numbers;

function squareArray(arr) {
    if (!Array.isArray) return null;
    //1 - good
    let res = []; //создаем новый пустой массив

    for (let el of arr) {
        res.push(el * el);
    }
    return res;
}

// function squareArray2(arr) {
//     if (!Array.isArray) return null;
//     let res = [...arr];
//     for (let i = 0; i < arr.length; i++) {
//         res[i] = arr[i] * arr[i];
//     }
//     return res;
// }