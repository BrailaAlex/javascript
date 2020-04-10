function checkSum(arr) {
    let sumArr = 0;
    if (!Array.isArray(arr)) return null;
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
    }
    return (sumArr > 100);
}
// alert(checkSum([1, 2, 3, 58, 95]));