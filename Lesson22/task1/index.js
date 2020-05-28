const divElem = document.querySelector(".rect_div");
const pElem = document.querySelector(".rect_p");
const spanElem = document.querySelector(".rect_span");
const attachBtn = document.querySelector(".attach-handlers-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const clearBtn = document.querySelector(".clear-btn");

const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green'); // .within bind we create new function every time we click
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGrayDiv = logTarget.bind(null, 'DIV', 'gray'); // .within bind we create new function every time we click
const logGrayP = logTarget.bind(null, 'P', 'gray');
const logGraySpan = logTarget.bind(null, 'SPAN', 'gray');

divElem.addEventListener('click', logGrayDiv, true);
pElem.addEventListener('click', logGrayP, true);
spanElem.addEventListener('click', logGraySpan, true);

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

const clearField = () => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML = '';
}

clearBtn.addEventListener('click', clearField);

const attachEvent = () => {
    divElem.addEventListener('click', logGrayDiv, true);
    pElem.addEventListener('click', logGrayP, true);
    spanElem.addEventListener('click', logGraySpan, true);

    divElem.addEventListener('click', logGreenDiv);
    pElem.addEventListener('click', logGreenP);
    spanElem.addEventListener('click', logGreenSpan);
}
attachEvent();

attachBtn.addEventListener('click', () => attachEvent());

const removeEvent = () => {
    divElem.removeEventListener('click', logGrayDiv, true);
    pElem.removeEventListener('click', logGrayP, true);
    spanElem.removeEventListener('click', logGraySpan, true);

    divElem.removeEventListener('click', logGreenDiv);
    pElem.removeEventListener('click', logGreenP);
    spanElem.removeEventListener('click', logGreenSpan);
}

removeBtn.addEventListener('click', removeEvent);