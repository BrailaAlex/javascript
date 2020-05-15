// calc

//'1 + 2' => '1 + 2 = 3'


const calc = expression => {
    const [a, operator, b] = expression.split(' '); //используем деструктуризацию массива присваивая каждому 
    let result; //используем перпеменную, чтобы в нее помещать результат      //элементу имя переменной
    switch (operator) {
        case '+':
            result = +a + Number(b);
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    return `${expression}  = ${result}`;
};
// const expr = '22 / 35'
// console.log(calc(expr));