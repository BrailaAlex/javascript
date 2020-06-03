import { renderListItems } from './renderListItems.js';
import { createTask, listElem } from './create.js';
import { checkIfDone } from './checkitems.js';
import { getItem } from './storage.js';

const crtBtnElem = document.querySelector('.create-task-btn');
console.log(getItem('tasksList'));

document.addEventListener('DOMContentLoaded', () => {
    renderListItems(getItem('tasksList'));
})
listElem.addEventListener('click', checkIfDone);
crtBtnElem.addEventListener('click', createTask);