const tasks = [
    { text: 'Buy milk', done: false, id: 1 },
    { text: 'Pick up Tom from airport', done: false, id: 2 },
    { text: 'Visit party', done: false, id: 3 },
    { text: 'Visit doctor', done: false, id: 4 },
    { text: 'Buy meat', done: false, id: 5 },
];

const listElem = document.querySelector('.list');
const btnElem = document.querySelector('.btn');
const inputElem = document.querySelector('.task-input');


const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {

            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = `${id}`;

            const checkboxItem = document.createElement('input');
            checkboxItem.setAttribute('type', 'checkbox');
            checkboxItem.checked = done;
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            checkboxItem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxItem, text);

            return listItemElem;
        });
    console.log(tasks);
    listElem.append(...listItemsElems);

};

renderListItems(tasks);

const checkDoneWork = (event) => {
    const checkedElem = event.target;
    // if (checkedElem.tagName !== 'input') return;

    const getId = tasks.find(elem => elem.id === +checkedElem.parentElement.dataset.id);
    getId.done = checkedElem.checked;

    listElem.innerHTML = '';
    renderListItems(tasks);
};

listElem.addEventListener('click', checkDoneWork);


const creatTask = () => {
    if (inputElem.value == '') return;

    tasks.push({
        id: tasks.length + 1,
        text: inputElem.value,
        done: false,
    });

    inputElem.value = '';

    listElem.innerHTML = '';
    renderListItems(tasks);
};

btnElem.addEventListener('click', creatTask);