const createButton = buttonText => {
    const buttonElem = document.createElement('button').textContent = `${buttonText}`;
    return document.body.append(buttonElem);
};

createButton('Send Email');

export { createButton };