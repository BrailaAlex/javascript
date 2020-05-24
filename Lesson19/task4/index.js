const user = {
    firstName: 'Tom',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
};

export default user;

// console.log(user.fullName); //we refer to getter as to a property, not like to a method
// // user.fullName = 'Tom Hardy'; //setting a value for setter example
// // console.log(user.fullName); //we refer to getter as to a property, not like to a method
// user.setFullName('James Sallivan');
// console.log(user.firstName);