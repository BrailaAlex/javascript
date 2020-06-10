const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

/* getTasksList code here */
const getTasksList = (sourceURL) => tasksList = fetch(sourceURL)
    .then(response => response.json());

// getTasksList(baseUrl)
//     .then(tasksList => console.log(tasksList));

/* getTaskById code here */

const getTaskById = taskId => fetch(`${baseUrl}/${taskId}`)
    .then(response => response.json());


// getTaskById(20)
//     .then(task => console.log(task));
// export { getTasksList, getTaskById };