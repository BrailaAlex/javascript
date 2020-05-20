// defer(func, ms) => Function

function defer(func, ms) {
    return function() {
            // setTimeout(() => func(...arguments), ms);
            setTimeout(() => func.call(this, ...arguments), ms); //arguments является псевдомассивом
            // setTimeout(() => func.apply(this, arguments), ms);
            // setTimeout(func, ms);
        }
        //для того, чтобы функция, присвоенная через аргумент func имела доступ к аргументам,
        //которые мы обьявили в defferedSayHi(2, 8) 
        // вложенной функции используем spred-оператор
}
// const sum = (a, b) => {
//     console.log(a + b);
// }
// const defferedsum = defer(sum, 1000);

// defferedsum(2, 8);

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'm ${this.name}!`)
    }
}

const userHi = user.sayHi.bind(user)
const defferedHi = defer(user.sayHi, 1000);

defferedHi.call({ name: 'Bob' });