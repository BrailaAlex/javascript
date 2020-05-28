const checkboxElem = document.querySelector('.task-status');
// console.log(checkboxElem);
checkboxElem.addEventListener('change', () => {
    console.log(checkboxElem.checked);
});