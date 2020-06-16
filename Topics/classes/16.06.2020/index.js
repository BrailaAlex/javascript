export function User(name, age) {
    // let user = {};
    // Object.assign(user, { name });
    // Object.assign(user, { age });
    // return user;
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(`Hi I am ${this.name}`);
};

User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`)
};

User.prototype.setAge = function(value) {
    if (value < 0) return false;

    this.age = value;

    if (value > 25) {
        // console.log(this);
        this.requestNewPhoto();
    }

    return this.age;
};

console.log(User.prototype);
let user1 = new User('John', 50);
// console.log(user1);
// user1.sayHi();
user1.setAge(30);

// let user2 = new User('Bob', 50)
// console.log(user2);
// user2.sayHi();