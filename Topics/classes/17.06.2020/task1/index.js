class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi = function() {
        console.log(`Hi I am ${this.name}`);
    };

    requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`)
    };

    setAge = function(value) {
        if (value < 0) return false;

        this.age = value;

        if (value > 25) {
            // console.log(this);
            this.requestNewPhoto();
        }

        return this.age;
    };

}

console.log(User.prototype);
let user1 = new User('John', 50);
// console.log(user1);
// user1.sayHi();
user1.setAge(30);

// let user2 = new User('Bob', 50)
// console.log(user2);
// user2.sayHi();