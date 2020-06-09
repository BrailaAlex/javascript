//Timer object
// algo:
//1. create an object with properties minutes, seconds and timer id. Give to minutes and seconds zero values
//2. create four methods of object startTimer, getTime, stopTimer, resetTimer.
//3. startTimer sets to timer.id function setInterval, wich has inner function,
//that increases seconds every second and minutes every time seconds value even 60
//4. getTimer returns actual value of time: `minutes : seconds`
//5. stopTimer has to stop timer, argument of which is timerd, we evaluated in startTimer.
//6. resetTimer sets zero value of minutes and seconds.


export let timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerID: 0,
    startTimer() {
        this.timerID = setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed === 60) {
                this.secondsPassed = 0;
                this.minsPassed++;
            }
        }, 1000);
    },
    getTime() {
        return (`${this.minsPassed}:${this.secondsPassed < 10 
            ? '0' + this.secondsPassed 
            : this.secondsPassed}`);
    },
    stopTimer() {
        clearInterval(this.timerID)
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    }
}