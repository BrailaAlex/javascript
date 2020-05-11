addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
addPropertyV2 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return returnedObj = Object.assign(obj, sourceObj);
}
addPropertyV3 = (obj, key, value) => {
    const cloneObj = Object.assign({}, obj)
    const sourceObj = {
        [key]: value
    };
    return returnedData = Object.assign(cloneObj, sourceObj);
}
addPropertyV4 = (obj, key, value) => {
    const cloneObj = Object.assign({}, obj)
    return returnedObj = {...cloneObj, [key]: value };
}
const transaction = {
    value: 170,
}
const result = addPropertyV4(transaction, 'currency', 'USD');

console.log(result);