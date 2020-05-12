mergeObjectsV1 = (obj1, obj2) => {
    return resultedObj = Object.assign({}, obj1, obj2);
};

mergeObjectsV2 = (obj1, obj2) => {
    return resultedObj = Object.assign({}, obj2, obj1);
};

mergeObjectsV3 = (obj1, obj2) => {
    return resultedObj = {... {}, ...obj1, ...obj2 };
};
mergeObjectsV4 = (obj1, obj2) => {
    return resultedObj = {... {}, ...obj2, ...obj1 };
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