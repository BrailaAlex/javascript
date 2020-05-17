// messenger
// let message = 'Hi!'; если переменную message обьявить глобально, то она существует в глобальном
//лексическом окруженни и меняя ее для messenger2, мы изменяем ее глобально и для первого и для 
// всего документа, а когда переносим внутрь тела функции createMessanger, то через
//вызоавы разных переменных messenger1 и 2 создаем два разных лексических окружения с разными значениями
//переменной message

const createMessenger = () => {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        // const sender = 'Gromcode'
        console.log(`${name}, ${message}! Your ${sender}`);
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

export default createMessenger;

const messenger1 = createMessenger(); //присваиваем ф-ию в другую переменную
const messenger2 = createMessenger();
const messenger3 = createMessenger();

messenger1.sendMessage('Bob'); //переходим к методу sendMessage() обьекта. 
//который возвращает ф-ия createMessanger()

messenger2.setMessage('Goodjob');
messenger2.sendMessage('Bob');

messenger3.setSender('Tom');
messenger3.sendMessage('Bob');