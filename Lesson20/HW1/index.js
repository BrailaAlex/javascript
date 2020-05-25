export class Order {
    constructor(price, city, type) {
        this.id = Math.random.toString();
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.prise > 1000) return true;
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