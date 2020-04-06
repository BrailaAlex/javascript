let result = 0

while (true) {
    const userInput = prompt('Your number')
    if (!userInput) {
        break
    }
    result += Number(userInput);
}
console.log('Result: ' + result);