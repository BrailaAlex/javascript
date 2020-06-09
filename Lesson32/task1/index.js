// asyncSum(asyncNum1, asyncNum2, ...)

// const p = new Promise();

// const resolvedPromise = Promise.resolve(17);

// const resolvedPromise2 = new Promise(resolve => resolve(17));

// const rejectedPromise = Promise.reject(new Error('error'));

// const rejectedPromise2 = new Promise((_, reject) => reject(new Error('error')));

const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);
});

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay('10', 3000);

const getSum = numbers =>
    numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Cant\'t calculate')));
};

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
//     .then(result => console.log(result));

export { asyncSum };