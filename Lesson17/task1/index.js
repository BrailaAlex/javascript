export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
const res = user.getFullName.bind(user);
console.log(user.getFullName());
console.log(res());