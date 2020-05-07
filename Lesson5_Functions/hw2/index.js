// function getPrimes(num) {
//     for (let i = 2; i <= num; i++) {
//         if (isPrime(i)) console.log(i);
//     }
// }

// function isPrime(num) {
//     for (let j = 2; j < num; j++) {
//         if (num % j === 0) return false;
//     }
//     return true;
// }
// getPrimes(35);

function firstNumber(a = 5) {
    for (let i = 1; i <= a; i++) {
        console.log('=> ' + i + ' <=');
        console.log(secondNumber(i));
    }
}

function secondNumber(a) {
    for (let j = 0; j <= 10; j++) console.log(a + ' * ' + j + ' = ' + a * j);
}

firstNumber();