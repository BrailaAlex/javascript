fetch('https://5ee220bb8b27f3001609462e.mockapi.io/api/v1/tasks')
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
        throw new Error('No data');
    })
    .then(data => console.log(data))
    .catch(err => {
        console.log(err);
    })