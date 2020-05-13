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
    cloneObj = {...obj };
    return Object.entries(cloneObj).map(arr => {
        let id = { id: arr.shift() };
        return arr[0] = {...arr[0], ...id }
    })
}

const result = getCustomersList(customers);
console.log(result);
console.log(customers);