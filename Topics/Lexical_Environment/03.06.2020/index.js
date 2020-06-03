// "use strict";
//scope example:
// let message = 'Hello';
// if (true) {
//     let message = 'Hi';
//     console.log(message);
// };

// {
//     let message = 'Hey';
//     console.log(message);
// }

// console.log(message);
// console.log(sum(5, 6));

// function sum(a, b) {
//     return a + b;
// }

// console.log(message);
// var message = "Hello there";
// // console.log(message);
// // console.log(message1);
// const message1 = "Hello there";
// console.log(message1);

// //hoisting VAR example 1:

// var a = 10;
// if (true) {
//     var a = 50
//     console.log(a);
// }
// console.log(a);

// //hoisting VAR example 2:

// var foo = 1;

// function bar() {
//     if (!foo) {
//         console.log(foo);
//         console.log(!foo);
//         var foo = 10;
//     }
//     return foo;
// }
// var foo = bar();
// console.log(foo);

// //hoisting VAR example 3:

// var message = 'hello';

// function print() {
//     console.log(message); //we will receive undefined, cause we assign value to var only on second step
//     var message = "stop";
// }
// print();
// console.log(message);

// scope example:
let message = 'Hello';
if (true) {
    // let message = 'Hi';
    console.log(message);
};

console.log(message);