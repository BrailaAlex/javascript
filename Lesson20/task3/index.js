// Wallet

export class Wallet {
    constructor() {
        this.balance = 0;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('No enought funds');
            return;
        }
        this.balance -= amount;
    }
}

// const wallet1 = new Wallet;
// wallet1.deposit(1250);
// console.log(wallet1.getBalance());
// wallet1.withdraw(1200);
// console.log(wallet1.getBalance());
// wallet1.withdraw(1200);