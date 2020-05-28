const singleUsehBtn = document.querySelector('.single-use-btn');
const clickEvent = () => {
    console.log('clicked');
    singleUsehBtn.removeEventListener('click', clickEvent);
};
singleUsehBtn.addEventListener('click', clickEvent);