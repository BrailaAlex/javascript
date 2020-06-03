import { todoList } from './todoList.js';
import { setItem, getItem } from './storage.js';
import { renderListItems } from './renderListItems.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const createTask = () => {
    if (inputElem.value == '') return;
    todoList.push({
        id: todoList.length + 1,
        text: inputElem.value,
        done: false,
        createDate: new Date(),
        checkDate: undefined,
    });
    setItem('todoList', todoList);

    inputElem.value = '';
    console.log(getItem('todoList'));
    console.log(todoList);

    listElem.innerHTML = '';
    renderListItems(getItem('todoList'));
};