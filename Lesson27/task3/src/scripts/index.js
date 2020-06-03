import { todoList } from './todoList.js';
import { renderListItems } from './renderListItems.js';
import { createTask, listElem } from './create.js';
import { checkIfDone } from './checkitems.js';
import { getItem } from './storage.js';

const crtBtnElem = document.querySelector('.create-task-btn');

document.addEventListener('DOMContentLoaded', () => {
    renderListItems(getItem('todoList'));
})
listElem.addEventListener('click', checkIfDone);
crtBtnElem.addEventListener('click', createTask);