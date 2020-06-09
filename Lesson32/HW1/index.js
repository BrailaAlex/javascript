/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = value => Promise.resolve(value);



export { makePromise };
// makePromis(21);
/*
 * пример использования
 */
// makePromise(17)
//     .then(number => {
//         console.log(number); // 17
//     });