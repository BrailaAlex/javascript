export class Order {
    constructor(price, city, type) {
        this.id = `${Math.random()}`
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price > 1000) return true;
        return false;
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') return true;
        return false;
    }
}

const order1 = new Order(250, 'Detroit', 'Buy');
const order2 = new Order(250, 'Chicago', 'Buy');
const order3 = new Order(250, 'Illinois', 'Buy');
const order4 = new Order(250, 'Missisippi', 'Buy');
const order5 = new Order(250, 'New York', 'Buy');
console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);
console.log(order5);
// console.log(Order.checkPrice());