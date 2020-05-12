const buildObject = (keyList, valuesList) => {
    obj = {};
    keyList.forEach((el, i) => obj[el] = valuesList[i]);
    return obj;
}

const keyList = ['name', 'surname', 'age'];
const valuesList = ['Oleksii', 'Braila', 30];
const result = buildObject(keyList, valuesList);
console.log(result);