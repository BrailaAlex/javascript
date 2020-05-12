compareObjects = (obj1, obj2) => {
    const arr1 = Object.entries(obj1).flat();
    const arr2 = Object.entries(obj2).flat();
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((elem, i) => elem == arr2[i]);
    // let checker = arr1.find((elem, i) => elem !== arr2[i]);
    // if (checker) {
    //     return false;
    // }
    // return true;
};

const obj1 = {
    name: 'Bob',
    age: 17,
    // student: false,
}
const obj2 = {
    name: 'Bob',
    age: 17,
    // student: false,
}

console.log(compareObjects(obj1, obj2));