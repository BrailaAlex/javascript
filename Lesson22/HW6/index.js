const btns = document.querySelectorAll('.btn');
const handleClick = () => {
        console.log(event.target.textContent);
    }
    [...btns].map(el => el.addEventListener('click', handleClick));