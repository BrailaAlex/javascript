const btns = document.querySelectorAll('.btn');
const handleClick = () => {
    console.log(event.target.textContent);
}
btns[0].addEventListener('click', handleClick);
btns[1].addEventListener('click', handleClick);
// [...btns].map(el => el.addEventListener('click', handleClick));