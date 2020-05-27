const createButton = buttonText => {
    const buttonElem = document.createElement('button');
    buttonElem.textContent = `${buttonText}`;
    return document.querySelector('body').append(buttonElem);
};
createButton('Send Email');

export { createButton };