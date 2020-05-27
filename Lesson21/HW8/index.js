const finishList = () => {
    const liElemFirst = document.createElement('li');
    const liElemFourth = document.createElement('li');
    const liElemSixth = document.createElement('li');
    const liElemEightth = document.createElement('li');
    liElemFirst.textContent = '1'
    liElemFourth.textContent = '4'
    liElemSixth.textContent = '6'
    liElemEightth.textContent = '8'
    const listElem = document.querySelector('.list');
    listElem.append(liElemEightth);
    listElem.prepend(liElemFirst);
    const specLi = document.querySelector('.special');
    specLi.before(liElemFourth);
    specLi.after(liElemSixth);
};
finishList();
export { finishList };