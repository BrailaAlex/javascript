const btns = document.querySelectorAll('.btn');
const handleclick = () => {
        console.log(event.target.textContent);
    }
    [...btns].map(el => el.addEventListener('click', handleclick));