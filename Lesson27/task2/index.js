const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounter = event => {
    const isButton = event.target.classList.contains('counter__button');


    if (!isButton) {
        return;
    }; // if we click not on button we interrapt function
    const action = event.target.dataset.action; // verifying button by data-action argument

    const oldValue = Number(counterValueElem.textContent); //value of counter span

    const newValue = action === 'decrease' ?
        oldValue - 1 :
        oldValue + 1;

    localStorage.setItem('counterValue', newValue);
    counterValueElem.textContent = newValue;
}

counterElem.addEventListener('click', onCounter);

const onStorageChange = event => {
    counterValueElem.textContent = event.newValue; //thats the way we synchronize changes of value in to different tabs;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}


document.addEventListener('DOMContentLoaded', onDocumentLoaded);