'Ann'.charCodeAt(0); // 65 - выводим кодовое значение для символа с нулевым индексом
String.fromCodePoint(65); // A - выводим символ, который находится под кодом 65


const sortContacts => {
    return result = contacts.
    sort((a, b) => {
        return a.localeCompare(b);
    });

}
console.log(sortContacts(contacts));