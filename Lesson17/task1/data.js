//methods

const user = {
    firstName: 'John',
    name: 'Doe',
    sayHi(age, message) {
        console.log(`${message}. I'm ${this.name}. I'm ${age} years old. `);
    },
    // sayHi: function() {
    //     console.log(`Hi, I am ${this.name}.`);
    // }
    getFullName() {
        // console.log(`${this.firstName} ${this.lastName}.`);
        console.log(this.name);
    }
};

// user.sayHi = function() {
//     console.log(`Hi, I am ${this.name}.`);
// }

// user.getFullName();

// const func = user.getFullName.bind(user);
// const func = user.getFullName.bind({ name: 'Tom' });

// func();

const func = user.getFullName;
func.call({ name: "Tom" });
const func2 = user.sayHi;
// func2(17, 'Hello');
func2.apply({ name: "Tom" }, [17, 'Hello']); //разные формы записи для apply и call
func2.call({ name: "Tom" }, 17, 'Hello');

//.bind();