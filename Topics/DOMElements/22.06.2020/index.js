const setButton = (buttonText) => {
	// const button = `<button>${buttonText}</button>`;
	// document.querySelector("body").innerHTML = button;
	const button = document.createElement("button");
	button.textContent = buttonText;
	document.querySelector("body").append(button);

	// return (document.querySelector(
	// 	"body"
	// ).innerHTML = `<button>${buttonText}</button>`);
};
setButton("Login");
export { setButton };
