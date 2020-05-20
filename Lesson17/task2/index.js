//callbackPrompt

export const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        // console.log(this);
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        // console.log(this);
        setTimeout(this.showPrompt.bind(this), ms)
    }
};

// callbackPrompt.showDefferedPrompt(1000);