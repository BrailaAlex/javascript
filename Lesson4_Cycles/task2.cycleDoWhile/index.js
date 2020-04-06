const m = 3;
const n = 15;
let y = m;
let result = 1;

do {
    if (y % 2 === 1) {
        result *= y;
    }
    y += 1;
}
while (y <= n);

console.log('Result: ', result);