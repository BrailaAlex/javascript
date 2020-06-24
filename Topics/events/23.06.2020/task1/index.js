// так можно получить данные формы
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const formElem = document.querySelector('.login-form');

//algo
//1. validate
//2. handle submit: 
//2.1 gather form data +++
//2.2 create object +++
//2.3 show alert +++
//3. 

const validateEmail = () => {
    console.log("validateEmail");
};

const validatePassword = () => {
    console.log("validatePassword");
};

emailInputElem.addEventListener('input', validateEmail)

passwordInputElem.addEventListener('input', validatePassword)

const handlerSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formElem);
    console.log(formData);
    const formObj = Object.fromEntries(formData);
    console.log(formObj);
    alert (JSON.stringify(formObj));

}

formElem.addEventListener('submit', handlerSubmit)