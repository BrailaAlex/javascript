import { tasks } from './storage.js';
import { renderListItems } from './taskslist.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const createTask = () => {
    if (inputElem.value == '') return;

    tasks.push({
        id: tasks.length + 1,
        text: inputElem.value,
        done: false,
        createDate: new Date(),
        checkDate: undefined,
    });

    inputElem.value = '';

    listElem.innerHTML = '';
    renderListItems(tasks);
};