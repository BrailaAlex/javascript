const pagBtn = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
    console.log(event.target.dataset.pageNumber);
};
[...pagBtn].map((elem) => elem.addEventListener('click', handleClick));