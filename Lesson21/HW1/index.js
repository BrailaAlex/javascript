const getTitleElement = () => {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
};

const getInputElement = () => {
    const inputElem = document.querySelector('text');
    console.dir(inputElem);
    return inputElem;
};

getTitleElement();
getInputElement();

// export { getTitleElement, getInputElement };