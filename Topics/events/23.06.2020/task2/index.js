const buttons = document.querySelectorAll('.btn');
console.log(buttons);

const clickHandler = (event) => {
    console.log(event.target);
    console.log(event);
}

[...buttons]
    .forEach(btn => btn.addEventListener('click', clickHandler));
