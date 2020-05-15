// input: Array
// output: array with cleaned elements

const cleanTransactionsList = arr => {
    return arr.filter(i => typeof + i === 'number' && !isNaN(i)).map(i => '$' + (+i).toFixed(2));
}

// const array = ['  1.9', '2.75 dollar', '3.25hryvna', '  2.758  '];
// const res = cleanTransactionslist(array);
// console.log(res);
// console.log(array);