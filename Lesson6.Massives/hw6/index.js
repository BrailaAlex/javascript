// spread и деструктуризация

// const numbers = [11, 22, 44, 55, 66];

function cloneArr(arr) {
    if (!Array.isArray(arr)) return null;
    let cloneArray = []
    for (let i = 0; i <= arr.length; i++) {
        cloneArray.push(arr[i]);
    }
    return cloneArray;
}

// console.log(cloneArr(numbers));