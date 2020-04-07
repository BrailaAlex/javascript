// function findDivCount(a, b, n) {
//     let result = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % n === 0) {
//             result++;
//         } else if (result === 0) {
//             return 0;
//         }
//     }
//     return result;
// }
function findDivCount(a, b, n) {
    let cnt = 0;
    for (let i = a; i <= b; i++) {
        if (i % n) continue;
        cnt++;
    } else if (result === 0) {
        return 0;
    }
    return cnt;
}
// findDivCount(3, 12, 3);
// console.log(result);