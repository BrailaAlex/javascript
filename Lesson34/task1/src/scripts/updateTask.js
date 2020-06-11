import { renderTasks } from './renderer.js';
import { updateTask, getTasksList } from './tasksGateway.js'

function onToggleTask(event) {
    const isCheckbox = event.target.classList.contains('list-item__checkbox');
    if (!isCheckbox) return;

    const taskId = event.target.dataset.id;
    console.log(event.target);
    let tasksList
    getTasksList()
        .then(value => {
            tasksList = value;
            console.log(tasksList);
            console.log(typeof + taskId);
            const { text, createDate, id } = tasksList
                .find(task => task.id == taskId);

            const done = event.target.checked;


            const updatedTask = {
                id,
                text,
                createDate,
                done,
                finishDate: done ? new Date().toISOString() : null,
            };
            console.log(updatedTask);


            updateTask(id, updatedTask)
                .then(() => getTasksList())
                .then(() => {
                    renderTasks();
                });
        });

};

export { onToggleTask };

//1. Prepare Data
//2. Update data in db
//3. Read new data from server
//4. Save new data to front-end storage
//5. Update UI based on new data