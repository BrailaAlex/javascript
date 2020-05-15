// calc

//'1 + 2' => '1 + 2 = 3'
//используем деструктуризацию массива присваивая каждом
//элементу имя переменной
//используем перпеменную, чтобы в нее помещать результат 

const calc = expression => {
    const [a, operator, b] = expression.split(' ');
    let result;
    switch (operator) {
        case '+':
            result = +a + +b;
            break;
        case '-':
            result = +a - +b;
            break;
        case '*':
            result = +a * +b;
            break;
        case '/':
            result = +a / +b;
            break;
    }
    return `${expression} = ${result}`;
};
// const expr = '22 / 35'
// console.log(calc(expr));