// function getPrimes(num) {
//     for (let i = 1; i <= num; i++) {
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

function getPrimes(n) {
    console.log(1);
    step1: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue step1;
            }
        }
        console.log(i);
    }
}
getPrimes(35);