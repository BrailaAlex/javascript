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
    // function addPropertyV1(obj, key, value) {
    //     obj[key] = value;
    //     return obj;
    // }

// function addPropertyV2(obj, key, value) {
//     let idUser = {
//         [key]: value
//     };
//     return Object.assign(obj, idUser);
// }

// function addPropertyV3(obj, key, value) {
//     let idUser = {
//         [key]: value
//     };
//     return Object.assign({}, obj, idUser);
// }

// function addPropertyV4(obj, key, value) {
//     let idUser = {
//         [key]: value
//     };
//     return Object.assign({...obj }, idUser);
// }

const transaction = {
    value: 170,
}
const result = addPropertyV4(transaction, 'currency', 'USD');

console.log(result);