// input: undefined;
// output: Number;

// algo
//1. create function that will return enother
// function thought we can set another LE every time we call it
//2.function, that we return it is a function
// counter that increases result every time we call outer func

//interview example
// let a = 10;
// let b = 20;

// printer(a);
// sum(a, b);

// function printer(a) {
//     console.log(a);
// }

// const sum = (a, b) => {
//     console.log(a + b);
// }

let counter = 0;

function makeCounter() {
    // let counter = 10;

    return function() {
        // counter++;
        // return counter;
        return counter++;
    }
}

// let counter1 = makeCounter();
// let counter2 = makeCounter();
// console.log(counter1());
// // console.log(counter2());
// console.log(counter1());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// required to know:
// lexicalEnvironment = {
//     environmentRecord: {
//       <identifier> : <value>,
//       <identifier> : <value>,
//       ....
//     }
//     outer: < Reference to the parent lexical environment>
//   }