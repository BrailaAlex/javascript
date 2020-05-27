const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
};

const getItemsArray = () => {
    const getItemsArray = Array.from(document.querySelectorAll('.tool'));
    console.dir(getItemsArray);
    return getItemsArray;
};

getItemsList();
getItemsArray();

export { getItemsList, getItemsArray };