function getSubArray(arr, n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// console.log(getSubArray([25, 32, 65, 75, 85, 95], 5));