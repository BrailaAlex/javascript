'use strict';
// event (this in arrow functions)

const obj = {
    name: 'Tom',
    sayHi() {
        console.log(this);
    },
};

// const func = obj.sayHi;
// func();

// setTimeout(obj.sayHi.bind(obj), 100);
// setTimeout(() => obj.sayHi(), 100);

const event = {
    guests: [
        { name: 'Tom', email: 'a@gmail.com', age: 18 },
        { name: 'Bob', email: 'b@gmail.com', age: 17 }
    ],
    message: 'Welcome to the party',
    getInvitations() {
        console.log(this);
        return this.guests
            .filter(({ age }) => age >= 18)
            // .map(({ name, email }) => ({
            //     text: `Hi ${name}. ${this.message}`,
            //     email
            // }));
            .map(function({ name, email }) {
                return {
                    text: `Hi ${name}. ${this.message}`,
                    email
                }
            }, event); //event выполняет роль thisArg для переменной message;
    }

}

console.log(event.getInvitations());