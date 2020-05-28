const btns = document.querySelectorAll('.btn');
[jsBtn, htmlBtn] = btns;
const handleclick = () => {
    console.log(event.target.textContent);
}
jsBtn.addEventListener('click', handleclick);
htmlBtn.addEventListener('click', handleclick);