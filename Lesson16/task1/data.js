var greeting = 'Hello';

function sayHi() {
    greeting = 'Hi';
    console.log(greeting);

    if (false) {
        var greeting; //если убераем єту строку тогда для обоих логов
        //получим 'Hi', так как var greeting всплывает с любого момента кода
        //даже если он условный и не выполняется 
    }
}

sayHi();
console.log(greeting);