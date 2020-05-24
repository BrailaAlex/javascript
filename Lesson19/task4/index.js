export const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() { //example of getter
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) { //example of setter
        // setFullName(value) { //analog of setter by simple method
        const [firstName, lastName] = value.split(' '); // destructurizing of array
        this.firstName = firstName;
        this.lastName = lastName;
    },
}

// console.log(user.fullName); //we refer to getter as to a property, not like to a method
// // user.fullName = 'Tom Hardy'; //setting a value for setter example
// // console.log(user.fullName); //we refer to getter as to a property, not like to a method
// user.setFullName('James Sallivan');
// console.log(user.firstName);