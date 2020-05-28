const btns = document.querySelectorAll('.btn');
console.log(btns);
const handleclick = () => {
    console.log(event.target.textContent);
}
btns[0].addEventListener('click', handleclick);
btns[1].addEventListener('click', handleclick);