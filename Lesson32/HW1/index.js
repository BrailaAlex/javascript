/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromis = value => {
    return Promise.resolve(value)
        .then((value) => value);
}

export { makePromis };
// makePromis(21);
/*
 * пример использования
 */
// makePromise(17)
//     .then(number => {
//         console.log(number); // 17
//     });