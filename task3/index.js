// методы .pop(), .push(), .shift(), .unshift()

// const people = ['Tom', 'Ann', 'Bob'];

// // people[people.length] = 'Jack';

// // people.push('Jack', 'John'); //add to end
// const last = people.pop(); //delete last element
// const first = people.shift(); //delete first
// people.unshift('Jack', 'John'); //add to start

// console.log(first);
// console.log(last);
// console.log(people);
// console.log(people.length);


// from, to => [%3 === 0]

function getSpecialNumbers(m, n) {
    let specialNumbers = [];

    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            specialNumbers.push(i);
        }
    }
    return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);
console.log(specialNumbers);