// send Message

// 'use strict';

let message = 'Just learn it'


function sendMessage(name) {
    const sender = 'Gromcode'
    console.log(`${name}, ${message}! Your ${sender}`);
}


function setMessage(text) {
    message = text;
}

sendMessage("Ann");
setMessage("Good job");
sendMessage("Ann");


// sendMessage("Tom");

// another.js

// import {sendMessage} from './index.js';

// let message = 'Wow!';  // при экспорте функции в другой файл значение
//внешних переменных будут взяты из экспортируемого файла,
// даже, если переменная с таким же именем обьявлена в файле импорта 
// sendMessage('Bob')