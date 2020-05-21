export function defer(func, ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
}


const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'm ${this.name}!`)
    }
}

const userHou = user.sayHi;
const defferedHi = defer(userHou, 1000);
defferedHi.call({ name: 'Bob' });

const userHi = user.sayHi.bind(user);
const defferedHi2 = defer(userHi, 3000);
defferedHi2();