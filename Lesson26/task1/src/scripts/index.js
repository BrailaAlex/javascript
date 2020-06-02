import { tasks } from './storage.js';
import { renderListItems } from './taskslist.js';
import { createTask, listElem } from './create.js';
// import { checkIfDone } from './checkitems.js';


// const listElem = document.querySelector('.list');
const crtBtnElem = document.querySelector('.create-task-btn');
// // const inputElem = document.querySelector('.task-input');

document.addEventListener('DOMContentLoaded', () => {
    renderListItems(tasks);
})

const checkIfDone = (event) => {
    const checkedElem = event.target;
    if (checkedElem.tagName != 'INPUT') return;

    const getId = tasks.find(elem => elem.id === +checkedElem.parentElement.dataset.id);
    getId.done = checkedElem.checked;
    getId.doneDate = new Date();

    listElem.innerHTML = '';
    renderListItems(tasks);
};

listElem.addEventListener('click', checkIfDone);

// const createTask = () => {
//     if (inputElem.value == '') return;

//     tasks.push({
//         id: tasks.length + 1,
//         text: inputElem.value,
//         done: false,
//         createDate: new Date(),
//         checkDate: undefined,
//     });

//     inputElem.value = '';

//     listElem.innerHTML = '';
//     renderListItems(tasks);
// };
crtBtnElem.addEventListener('click', createTask);