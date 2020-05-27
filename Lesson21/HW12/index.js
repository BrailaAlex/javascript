const getSection = num => {
    const wantedSpan = document.querySelector(`span[data-number='${num}']`);
    const parentDiv = wantedSpan.closest('.box');
    return parentDiv.dataset.section;
}
getSection(5);