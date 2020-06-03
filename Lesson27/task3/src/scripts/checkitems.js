import { todoList } from './todoList.js';
import { renderListItems } from './renderListItems.js';
import { listElem } from './create.js';
import { setItem, getItem } from './storage.js';

export const checkIfDone = (event) => {
    const checkedElem = event.target;
    if (checkedElem.tagName != 'INPUT') return;
    const tasks = getItem('todoList');
    console.log(tasks);
    const getId = tasks.find(elem => elem.id === +checkedElem.parentElement.dataset.id);
    getId.done = checkedElem.checked;
    getId.doneDate = getId.done ? new Date() : undefined;

    console.log(tasks);
    listElem.innerHTML = '';
    setItem('todoList', tasks);
    console.log(tasks);
    console.log(getItem('todoList'));
    renderListItems(tasks);
};