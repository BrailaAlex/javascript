//asyncCalculator

const asyncCalculator = num => new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Initial value: ${num}`)
            resolve(num);
        }, 500)
    })
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
        }, 2000)
    }))
    .then(value => {
        const result = value * 2;
        console.log(`Multiplide value: ${result}`);
        return result;
    })
asyncCalculator(4)
    .then(value => console.log(value));