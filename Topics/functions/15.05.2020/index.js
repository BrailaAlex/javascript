//1. learn requirments!!!
//2. create algo!!!
//3. create prototype solution
//4. refactoring and testing
//5. final solution

// algo
// 1. iterate from 1 to n
// 2. write func that cheks number prime
// 3. if number is prime - print it

// input: number
// output: boolean
// algo
// 1. iterate from 1 to num
// 2. check if num % i !==0 => false
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        console.log('Check for: ' + i);
        if (num % i === 0) return false;
        // console.log('If is called for: ' + i);
    }
    console.log("Loop is finished");
    return true;
}

// input: number
// output: undefined


const getPrimes = n => {
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}