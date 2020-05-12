addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
addPropertyV2 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return Object.assign(obj, sourceObj);
}
addPropertyV3 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return Object.assign({}, obj, sourceObj);
}
addPropertyV4 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return Object.assign({...obj }, {...sourceObj });
}
const transaction = {
    value: 170,
}
const result = addPropertyV4(transaction, 'currency', 'USD');

console.log(result);