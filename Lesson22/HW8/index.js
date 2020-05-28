const checkboxElem = document.querySelector('.task-status');
const checkedChBox = (event) => {
    console.log(event.target.checked);
};
checkboxElem.addEventListener('change', checkedChBox);