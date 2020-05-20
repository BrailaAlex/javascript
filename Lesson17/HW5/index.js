export let timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerID: 0,
    startTimer() {
        this.timerID = setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed == 60) {
                this.minsPassed++;
                this.secondsPassed = 0;
            }
        }, 1000)
    },
    getTime() {
        return (`${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed}`)
    },
    clearInterval() {
        this.clearInterval(this.timerID)
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    }

}