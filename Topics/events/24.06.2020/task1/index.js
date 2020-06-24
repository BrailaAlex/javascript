const listElem = document.querySelector(".list");

const onListElemCons = (e) => {
  if (!e.target.classList.contains("list-item")) {
    return;
  }
  console.log(e.target.textContent);
  //   console.log(e.target);
};

listElem.addEventListener("click", onListElemCons);
