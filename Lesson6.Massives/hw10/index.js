function getSubArray(arr, n) {
    let subArr = [];
    for (let i = 0; i <= n; i++) {
        subArr.push(arr[i]);
    }
    return subArr;
}

// console.log(getSubArray([25, 32, 65, 75, 85, 95], 3));