const createButton = buttonText => {
    const buttonElem = document.createElement('button');
    buttonElem.textContent = `${buttonText}`;
    const bodyElem = document.querySelector('body');
    return bodyElem.append(buttonElem);
};
createButton('Send Email');

export { createButton };