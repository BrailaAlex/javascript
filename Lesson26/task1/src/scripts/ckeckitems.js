import { tasks } from './storage.js';
import { renderListItems } from './taskslist.js';
import { listElem } from './create.js';

export const checkIfDone = (event) => {
    const checkedElem = event.target;
    if (checkedElem.tagName != 'INPUT') return;

    const getId = tasks.find(elem => elem.id === +checkedElem.parentElement.dataset.id);
    getId.done = checkedElem.checked;
    getId.doneDate = new Date();

    listElem.innerHTML = '';
    renderListItems(tasks);
};