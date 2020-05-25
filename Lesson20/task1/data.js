class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compare(user1, user2) { //sets static method for class which is hard to attribute to any
        // of examples we set with this class
        return user1.age - user2.age;
    }
    sayHi() { //this way we are putting function to a prototype object
        console.log(`Hi, I am ${this.name}`)
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`)
    }
    setAge(newAge) {
        if (newAge < 0) return false;
        this.age = newAge;
        if (newAge >= 25) {
            this.requestNewPhoto();
        }
        return newAge;
    }
}

const user1 = new User('Alex', 30);
const user2 = new User('Bob', 32);
user1.sayHi();
// user2.setAge(22);
console.log(User.compare(user1, user2));