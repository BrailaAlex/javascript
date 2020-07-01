const serverUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

export const createTask = (taskData) => {
  return fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
};

const updateTask = (taskData) => {
  return fetch;
};

const deleteTask = (tasId) => {};

export const getTasks = () => {
  return fetch(serverUrl).then((response) => response.json());
  // .catch((error) => {
  //   alert(error);
  //   return [];
  // });
};
