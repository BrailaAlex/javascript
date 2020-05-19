//factory of arrays

export const createArrayOfFunctions = (num) => {
    let arr = [];
    if (num == undefined) return arr;

    if (typeof num !== 'number')
        return null;

    for (let i = 0; i < num; i++) {
        // arr.push(el => i);
        arr[i] = () => i;
    }
    return arr;
};

console.log(createArrayOfFunctions(9)[5]());