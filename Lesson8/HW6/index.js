const mergeObjectsV1 = (obj1, obj2) => {
    let resultedObj = Object.assign({}, obj1, obj2);
    return resultedObj;
};

const mergeObjectsV2 = (obj1, obj2) => {
    let resultedObj = Object.assign({}, obj2, obj1);
    return resultedObj;
};

const mergeObjectsV3 = (obj1, obj2) => {
    let resultedObj = {...obj1, ...obj2 }
    return resultedObj;
};
const mergeObjectsV4 = (obj1, obj2) => {
    let resultedObj = {...obj2, ...obj1 }
    return resultedObj;
};

const obj1 = {
    name: 'Tom',
    age: 17,
};
const obj2 = {
    name: 'Bob',
    student: false,
};


console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV2(obj1, obj2));
console.log(mergeObjectsV3(obj1, obj2));
console.log(mergeObjectsV4(obj1, obj2));