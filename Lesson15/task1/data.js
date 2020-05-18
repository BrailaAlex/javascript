// let message = 'Have a good day!';

// function sendMessage(name) {
//     let greeting = 'Hi, ';

//     if (name) {
//         // name = 'Bob!';
//         greeting = 'Hello, ';
//         console.log(greeting + name);
//     } else {
//         message = 'Hi there,'; // получим undefined, так как начинаем искать переменные
//         //на внутреннем LE, а потом поднимаемся выше, если не находим
//         console.log(message + ' is a message');
//     }

// }

// sendMessage("Tom")

for (let i = 0; i < 10; i++) { // для for i тоже не доступно снаружи
    console.log(i);
}