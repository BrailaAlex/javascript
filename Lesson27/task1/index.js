//getLocalStorageData
// localStorage.setItem('name', 'Tom');
localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(17));

console.log(JSON.parse(localStorage.getItem('hobbies')));

export const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let newValue;
            try {
                newValue = JSON.parse(value); //if on this step we've got no faults, we go ahead
            } catch (e) { //if we've got faults on 'try' step we go to 'catch' 
                newValue = value; //here we getting newValue without parsing
            }
            return {
                ...acc,
                [key]: newValue,
            };
        }, {})
};
console.log(getLocalStorageData());