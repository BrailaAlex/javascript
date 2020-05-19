//factory of arrays

export const createArrayOfFunctions = (num) => {
    if (typeof num !== 'number') return null;
    let arrOfFunctions = [];
    if (num == undefined) return arrOfFunctions;
    for (let i = 0; i < num; i++) {
        // arrOfFunctions.push(el => i);
        arrOfFunctions[i] = () => i
    }
    return arrOfFunctions;
}

console.log(createArrayOfFunctions(9)[5]());