getKeys = obj => Object.keys(obj).forEach(key => console.log(key));

const user = {
    name: 'Alex',
    age: 30,
    married: true,
    children: 'two girls',
}
console.log(getKeys(user));