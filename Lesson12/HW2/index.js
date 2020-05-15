// input: Array
// output: array with cleaned elements

const cleanTransactionslist = arr => {
    return arr.filter(num => typeof + num === 'number' && !isNaN(num))
        .map(num => '$' + (+num).toFixed(2));
}

// const array = ['  1.9', '2.75 dollar', '3.25hryvna', '  2.758  '];
// const res = cleanTransactionslist(array);
// console.log(res);
// console.log(array);