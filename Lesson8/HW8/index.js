const buildObject = (keysList, valuesList) => {
    obj = {};
    keysList.forEach((el, i) => obj[el] = valuesList[i]);
    return obj;
}

const keysList = ['name', 'surname', 'age'];
const valuesList = ['Oleksii', 'Braila', 30];
const result = buildObject(keysList, valuesList);
console.log(result);