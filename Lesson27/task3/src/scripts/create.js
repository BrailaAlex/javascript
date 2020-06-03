import { todoList } from './todoList.js';
import { setItem, getItem } from './storage.js';
import { renderListItems } from './renderListItems.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const createTask = () => {
    if (inputElem.value == '') return;
    const check = getItem('todoList');
    console.log(check);
    check.push({
        id: check.length + 1,
        text: inputElem.value,
        done: false,
        createDate: new Date(),
        checkDate: undefined,
    });
    setItem('todoList', check);
    inputElem.value = '';
    listElem.innerHTML = '';
    renderListItems(getItem('todoList'));
};