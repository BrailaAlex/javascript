// counter

let count = 0;
const makeCounter = () => {
    return function add() {
        return count++;
    }

};

export { makeCounter as counterMake };

const counter1 = makeCounter();
const counter2 = makeCounter();


console.log(counter1()); //0
console.log(counter1()); //1
console.log(counter1()); //2

console.log(counter2()); //0
console.log(counter2()); //1