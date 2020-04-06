const m = 3;
const n = 15;
let y = m;
let sum = 1;

do {
    if (y % 2 === 1) {
        sum *= y;
    }
    y += 1;
}
while (y <= n);

console.log('Result: ', sum);