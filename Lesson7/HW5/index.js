function withdraw(clients, balances, client, amount) {
    return (balances[clients.indexOf(client)] < amount) ? -1 : (balances[clients.indexOf(client)] - amount);
}
console.log(withdraw(['Ann', 'John', 'Bob'], [1500, 600, 75], 'Bob', 55));