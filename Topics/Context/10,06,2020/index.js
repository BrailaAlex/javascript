function printMessage(age, city) {
	console.log(
		`Hello ${this.name}, email: ${this.email}, age: ${age}, city: ${city}`
	);
}

let user = {
	name: "Alex",
	email: "gmail.com",
};

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

// input: func, Object
// output: func

function myBind2(func, context) {
	// 1. add func into context
	// 2. call func and return result
	return function (...args) {
		let copyContext = { ...context, func };
		console.log(copyContext.func);
		return copyContext.func(...args);
	};
}

//input: func, obj
//output: func

function myBindWithApply(func, context) {
	return function (...args) {
		let funcResult = func.apply(context, args);
		return funcResult;
	};
}

let bindedPrintMessage = myBindWithApply(printMessage, user);
bindedPrintMessage(50, "Kyiv");
