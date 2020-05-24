// User

export function User(name, age) {
    this.name = name;
    this.age = age;

    User.prototype.sayHi = function() { //this way we are putting function to a prototype object
        console.log(`Hi! I am ${this.name}`)
    }
}

const user1 = new User('Alex', 30);
const user2 = new User('Bob', 32);
console.log(user2);
user1.sayHi();