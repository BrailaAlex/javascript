// messenger
// let message = 'Hi!'; если переменную message обьявить глобально, то она существует в глобальном
//лексическом окруженни и меняя ее для messenger2, мы изменяем ее глобально и для первого и для 
// всего документа, а когда переносим внутрь тела функции createMessanger, то через
//вызоавы разных переменных messenger1 и 2 создаем два разных лексических окружения с разными значениями
//переменной message

const createMessanger = () => {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        // const sender = 'Gromcode'
        console.log(`${name}, ${message}! You ${sender}`);
    }


    function setMessage(text) {
        message = text;
    }

    function setSender(text) {
        sender = text;
    }
    return {
        sendMessage, //если название свойства совпадает с названием переменной, которую мы присваиваем
        setMessage, // этому свойству совпадает, то их можно обьявить одним словом
        setSender,
    };
};

export default createMessanger;

const messenger1 = createMessanger(); //присваиваем ф-ию в другую переменную
const messenger2 = createMessanger();
const messenger3 = createMessanger();

messenger1.sendMessage('Bob'); //переходим к методу sendMessage() обьекта. 
//который возвращает ф-ия createMessanger()

messenger2.setMessage('Goodjob');

messenger2.sendMessage('Tom'); // у 'Tom' и 'Ann' создаются разные лексичечкие окруженияб так как
//мы вызываем их через разные переменые и каждый раз создается новое лексическое окружение с 
// разными значениями "message"
messenger3.sendMessage('Ann');