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
    const sourceObj = {
        [key]: value
    };
    return returnedData = Object.assign({}, obj, sourceObj);
}
addPropertyV4 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return returnedObj = ({...obj }, sourceObj);
}
const transaction = {
    value: 170,
}
const result = addPropertyV2(transaction, 'currency', 'USD');

console.log(result);