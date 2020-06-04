// algo:
// 1. create array of tasks - and create 5 test tasks +++
// 2. write renderTasks (tasks) fucn that render all tasks
// 3. addEventListener for .list
// 4. addEventListener for create button
// 5. checkbox handler - update task in the array and render tasks
// 6. create handler - create task object and put to the array and render tasks

const tasks = [{
        text: 'Hello',
        done: false,
        id: 1
    },
    {
        text: 'Go to the gym',
        done: false,
        id: 2
    },
    {
        text: 'Visit a doctor',
        done: false,
        id: 3
    },
    {
        text: 'Buy milk',
        done: true,
        id: 4
    },
    {
        text: 'Rent a car',
        done: true,
        id: 5
    },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('data-task-id', `${id}`);
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);
            return listItemElem;
        });
    console.log(tasksElems);
    listElem.append(...tasksElems);
};

renderTasks(tasks);

listElem.addEventListener('click', udateTask);

function udateTask(event) {
    const checkedElem = event.target;
    console.log(checkedElem);
    if (checkedElem.tagName != 'INPUT') return;

    const task = tasks.find(task => task.id === +checkedElem.dataset.taskId);
    console.log(task);
    task.done = checkedElem.checked;
    renderTasks(tasks);
}


const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createtask);

function createtask(event) {
    console.log(event);
    const input = document.querySelector('.task-input');
    const inputVal = input.value;
    if (!inputVal) return;
    const newTask = {
        text: inputVal,
        done: false
    }
    input.value = "";
    tasks.push(newTask);

    renderTasks(tasks);
}