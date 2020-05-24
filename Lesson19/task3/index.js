export function User(name, age) {
    this.name = name;
    this.age = age;

    User.prototype.sayHi = function() { //this way we are putting function to a prototype object
        console.log(`Hi, I am ${this.name}`)
    }
    User.prototype.requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`)
    }
    User.prototype.setAge = function(newAge) {
        if (newAge < 0) return false;
        this.age = newAge;
        if (newAge >= 25) {
            console.log(`New photo request was sent for ${this.name}`)
        }
    }
}

const user1 = new User('Alex', 30);
const user2 = new User('Bob', 32);
user1.sayHi();
user1.setAge(-1)
console.log(user1);