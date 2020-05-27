const finishList = () => {
    const liElem1 = document.createElement('li');
    const liElem4 = document.createElement('li');
    const liElem6 = document.createElement('li');
    const liElem8 = document.createElement('li');
    liElem1.textContent = '1'
    liElem4.textContent = '4'
    liElem6.textContent = '6'
    liElem8.textContent = '8'
    const listElem = document.querySelector('.list');
    listElem.append(liElem8);
    listElem.prepend(liElem1);
    const specLi = document.querySelector('.special');
    specLi.before(liElem4);
    specLi.after(liElem6);
};
finishList();
export { finishList };