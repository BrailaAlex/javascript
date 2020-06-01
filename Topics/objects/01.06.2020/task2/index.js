//converting object to array - part 1
// input: object of objects
// output: array of objects

// algo:
//1. turn obj into array
//2. assign to every obj element id property with customer-id value
//3. sort resulting array by age.

// 1. learn requirements
// 2. create step by step algo (& input/output for funtions) 
// 3. create prototype solution
// 4. testing 
// 5. refactoring
// 6. final solution 

//algo
//1. turn obj into array of arrays
//2. map entries to the array of obj
//3. sort the array and return

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Bob',
        age: 32,
    },
    'customer-id-3': {
        name: 'Tom',
        age: 25,
    },
}

const getCustomersList = obj => {
    return Object.entries(obj)
        .map(([id, object]) => ({...object, id })) //using destructuring and rest operator
        // .map((entry) => {
        //     let id = entry[0];
        //     let obj = entry[1];
        //     let res = {...obj, id };
        //     return res;
        // })
        // .map(arr => {
        //     return {
        //         ...arr[1],
        //         id: arr[0],
        //     }
        // })
        .sort((a, b) => a.age - b.age);
}

console.log(getCustomersList(customers));