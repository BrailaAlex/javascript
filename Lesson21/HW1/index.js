const getTitleElement = () => {
    const titleElem = document.quarySelector('.title');
    console.dir(titleElem);
    return titleElem;
}
const getInputElement = () => {
    const inputElem = document.quarySelector('text');
    console.dir(inputElem);
    return inputElem;
}

// getTitleElement();
// getInputElement();

export { getTitleElement, getInputElement };