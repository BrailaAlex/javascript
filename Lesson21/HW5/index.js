const setButton = buttonText => {
    return document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
}
setButton("button text");
export { setButton };