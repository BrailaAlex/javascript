function printMessage(age, city) {
    console.log(`Hello ${this.name}, email: ${this.email}, age: ${age}, city: ${city}`);
}

let user = {
    name: 'Alex',
    email: 'gmail.com'
}

// let bindedPrintMessage = printMessage.bind(user);
// bindedPrintMessage(50, 'Kyiv');


// input: func, Object
// output: func

function myBind1(func, context) {
    return func.bind(context);
}


// let bindedPrintMessage = myBind1(printMessage, user);
// bindedPrintMessage(50, 'Kyiv');

//TODO implement it
//insert function printMessage into object.
// user.func = printMessage;
// console.log(user.func);
// user.func(50, 'Kyiv');

function myBind2(func, context) {
    let newContext = {...context, func }
    return newContext;
}

let bindedPrintMessage = myBind2(printMessage, user);
bindedPrintMessage.func(50, 'Kyiv');