const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
const addPropertyV2 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return Object.assign(obj, sourceObj);
}
const addPropertyV3 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return Object.assign({}, obj, sourceObj);
}
const addPropertyV4 = (obj, key, value) => {
    const sourceObj = {
        [key]: value
    };
    return {...obj, ...sourceObj };
}


const transaction = {
    value: 170,
}
const result = addPropertyV4(transaction, 'currency', 'USD');

console.log(result);