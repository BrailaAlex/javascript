import { createTask, getTasks } from "./gateWay.js";
import { renderTasks } from "./render.js";

//algo
//1. create delete click handler
//2. get task Id
//3. send DELETE http request by taskId
//4. render tasks
export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasks())
    .then((newTasksList) => {
      renderTasks(newTasksList);
    });
};
