// const divElem = document.querySelector(".rect_div");
// const pElem = document.querySelector(".rect_p");
// const spanElem = document.querySelector(".rect_span");
// const attachBtn = document.querySelector(".attach-handlers-btn");
// const removeBtn = document.querySelector(".remove-handlers-btn");
// const clearBtn = document.querySelector(".clear-btn");

// const logTarget = (text, color) => {
//     const eventsListElem = document.querySelector('.events-list');
//     eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px">${text}</span>`;
// };

// const logGreenDiv = logTarget.bind(null, 'div', 'green'); // .within bind we create new function every time we click
// const logGreenP = logTarget.bind(null, 'p', 'green');
// const logGreenSpan = logTarget.bind(null, 'span', 'green');

// const logGrayDiv = logTarget.bind(null, 'div', 'gray'); // .within bind we create new function every time we click
// const logGrayP = logTarget.bind(null, 'p', 'gray');
// const logGraySpan = logTarget.bind(null, 'span', 'gray');

// // divElem.addEventListener('click', logGrayDiv, true);
// // pElem.addEventListener('click', logGrayP, true);
// // spanElem.addEventListener('click', logGraySpan, true);

// // divElem.addEventListener('click', logGreenDiv);
// // pElem.addEventListener('click', logGreenP);
// // spanElem.addEventListener('click', logGreenSpan);

// const clearField = () => {
//     const eventsListElem = document.querySelector('.events-list');
//     eventsListElem.innerHTML = '';
// }

// clearBtn.addEventListener('click', clearField);

// const attachEvent = () => {
//     divElem.addEventListener('click', logGrayDiv, true);
//     pElem.addEventListener('click', logGrayP, true);
//     spanElem.addEventListener('click', logGraySpan, true);

//     divElem.addEventListener('click', logGreenDiv);
//     pElem.addEventListener('click', logGreenP);
//     spanElem.addEventListener('click', logGreenSpan);
// }
// attachEvent();

// attachBtn.addEventListener('click', attachEvent);

// const removeEvent = () => {
//     divElem.removeEventListener('click', logGrayDiv, true);
//     pElem.removeEventListener('click', logGrayP, true);
//     spanElem.removeEventListener('click', logGraySpan, true);

//     divElem.removeEventListener('click', logGreenDiv);
//     pElem.removeEventListener('click', logGreenP);
//     spanElem.removeEventListener('click', logGreenSpan);
// }

// removeBtn.addEventListener('click', removeEvent);

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attatchBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
    const eventList = document.querySelector('.events-list');
    eventList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


const attatchEventList = () => {
    divElem.addEventListener('click', logGreyDiv, true);
    pElem.addEventListener('click', logGreyP, true);
    spanElem.addEventListener('click', logGreySpan, true);

    spanElem.addEventListener('click', logGreenSpan);
    pElem.addEventListener('click', logGreenP);
    divElem.addEventListener('click', logGreenDiv);
};

attatchEventList();

const pushAttatch = attatchEventList;
attatchBtn.addEventListener('click', pushAttatch);


const removeEventList = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    pElem.removeEventListener('click', logGreyP, true);
    spanElem.removeEventListener('click', logGreySpan, true);

    spanElem.removeEventListener('click', logGreenSpan);
    pElem.removeEventListener('click', logGreenP);
    divElem.removeEventListener('click', logGreenDiv);
};
const pushRemove = removeEventList;
removeBtn.addEventListener('click', pushRemove);


const clearEventList = () => {
    document.querySelector('.events-list').innerHTML = '';
};
const pushClear = clearEventList;
clearBtn.addEventListener('click', pushClear);