// //DEMO

// let arr = [1, 2, 3, 4];
// console.log(...arr);

// function multiply() {

// }

// function sum(a, b, ...args) {
//     console.log(a); //put first two parameters into variables a & b;
//     console.log(b);
//     console.log(args); //gather parameters of a function into array
// }

// sum(1, 30, 42, 'rfr', 'sef');

//TASK
//input: number, number, number...
//output: number

function multiply1(...numbers) {
    return numbers.reduce((acc, el) => acc * el);
}

function multiply2() {
    let args = arguments;
    let arr = new Array(...args); //creating new array with constructor 
    console.log(arr);

    return [...args].reduce((acc, el) => acc * el);
}

console.log(multiply2(123, 123, 123));