const checkboxElem = document.querySelector('.task-status');
const checkedChBox = () => {
    console.log(checkboxElem.checked);
};
checkboxElem.addEventListener('change', checkedChBox);