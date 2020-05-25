// Wallet

class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enought funds');
            return;
        }
        this._balance -= amount;
    }
}

const wallet1 = new Wallet;
wallet1.deposit(1250);
console.log(wallet1.getBalance());
wallet1.withdraw(1200);
console.log(wallet1.getBalance());
wallet1.withdraw(1200);
// console.log(wallet1.getBalance());
console.log(wallet1._balance);