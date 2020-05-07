function withdraw(clients, balances, client, amount) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] == client) {
            if (balances[i] - amount >= 0) {
                return balances[i] - amount;
            }
            return '-1';
        }
    }
}

console.log(withdraw(['Ann', 'John', 'Bob'], [1500, 600, 75], 'Bob', 85))