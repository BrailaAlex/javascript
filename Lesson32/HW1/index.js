/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromis = value => {
    return Promise.resolve(value);
}

export { makePromis };

/*
 * пример использования
 */
// makePromise(17)
//     .then(number => {
//         console.log(number); // 17
//     });