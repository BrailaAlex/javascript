const manageClasses = text => {
    const oneElem = document.querySelector('.one');
    oneElem.classList.add('selected');
    const twoElem = document.querySelector('.two');
    twoElem.classList.remove('selected');
    const threeElem = document.querySelector('.three');
    threeElem.classList.toggle('three_done');
    const fourElem = document.querySelector('.four');
    if (fourElem.classList.containes('some-class')) {
        fourElem.classList.toggle('another-class');
    };
};

manageClasses();

export { manageClasses };