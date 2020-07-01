const onListElemCons = (e) => {
  if (e.target.classList.contains("list-item"))
    console.log(e.target.textContent);
};

document.querySelector(".list").addEventListener("click", onListElemCons);
