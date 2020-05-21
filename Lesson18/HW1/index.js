export const saveCalls = func => {


    function withMemory(this, ...args) {
        withMemory.calls.push(...args)
        return func.call(this, ...arguments);
    }

    withMemory.calls = [];
    return withMemory
};

// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(`Hi, I'm ${this.name}!`)
//     }
// }

// const userHi = user.sayHi;
// const calledName = saveCalls(userHi);
// calledName.call({ name: 'Bob' });