const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 23,
    },
    'customer-id-3': {
        name: 'Bob',
        age: 35,
    },
}

const getCustomersList = obj => {
    const cloneObj = {...obj };
    return Object.entries(cloneObj).map(arr => {
        let id = { id: arr.shift() };
        return arr[0] = {...arr[0], ...id }
    }).sort((a, b) => a.age - b.age);
}

const result = getCustomersList(customers);
console.log(result);
console.log(customers);