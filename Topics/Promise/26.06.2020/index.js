import { renderTasks } from "./render.js";
import { getTasks } from "./gateWay.js";
import { onCreateTask } from "./createTask.js";

getTasks().then((tasksList) => renderTasks(tasksList));

const createBtnElem = document.querySelector(".create-task-btn");

createBtnElem.addEventListener("click", onCreateTask);
