const tasks = [{
        text: 'Buy milk',
        done: false,
        id: 1,
        createDate: new Date(2020, 02, 15, 15, 15, 15),
        checkDate: undefined,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2,
        createDate: new Date(2020, 02, 15, 15, 15, 15),
        checkDate: undefined,
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
        createDate: new Date(2020, 02, 15, 15, 15, 15),
        checkDate: undefined,
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 4,
        createDate: new Date(2020, 02, 15, 15, 15, 15),
        checkDate: new Date(2020, 05, 17, 15, 15, 15),
    },
    {
        text: 'Buy meat',
        done: true,
        id: 5,
        createDate: new Date(2020, 02, 15, 15, 15, 15),
        checkDate: new Date(2020, 05, 15, 15, 15, 15),
    },
];

const listElem = document.querySelector('.list');
const crtBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');


const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => b.createDate - a.createDate)
        .sort((a, b) => b.checkDate - a.checkDate)
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
    listElem.append(...listItemsElems);

};

renderListItems(tasks);

const checkIfDone = (event) => {
    const checkedElem = event.target;
    if (checkedElem.tagName != 'INPUT') return;

    const getId = tasks.find(elem => elem.id === +checkedElem.parentElement.dataset.id);
    getId.done = checkedElem.checked;
    getId.checkDate = getId.done ? new Date() : undefined;

    listElem.innerHTML = '';
    renderListItems(tasks);
};

listElem.addEventListener('click', checkIfDone);


const creatTask = () => {
    if (inputElem.value == '') return;

    tasks.push({
        id: tasks.length + 1,
        text: inputElem.value,
        done: false,
        checkDate: undefined,
        createDate: new Date(),
    });

    inputElem.value = '';

    listElem.innerHTML = '';
    renderListItems(tasks);
};

crtBtnElem.addEventListener('click', creatTask);