const buildObject = (keysList, valuesList) => {
    return keysList.reduce((result, num, i) =>
        (result[num] = valuesList[i], result), {});
}

const keysList = ['name', 'surname', 'age'];
const valuesList = ['Oleksii', 'Braila', 30];
const result = buildObject(keysList, valuesList);
console.log(result);