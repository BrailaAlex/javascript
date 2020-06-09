// 1. learn requirements
// 2. create step by step algo (& input/output for funtions) 
// 3. create prototype solution
// 4. testing 
// 5. refactoring
// 6. final solution 

// let secondsPassed = 10;

const timer = {
        secondsPassed: 0,
        minutesPassed: 0,
        intervalId: null,

        // startTimer() {
        //     // LOOSE CONTEXT
        //     const adder = function() {
        //         this.secondsPassed += 1;
        //         console.log(this.secondsPassed);
        //     }
        //     // fix context
        //     const newAdder = adder.bind(this);
        //     setInterval(newAdder, 1000)
        // },
        startTimer() {
            this.intervalId = setInterval(() => {
                this.secondsPassed += 1;
                if (this.seconsPassed === 60) {
                    this.minutesPassed += 1;
                    this.seconsPassed = 0;
                }
                console.log(this.secondsPassed);

            }, 1000)
            console.log('ID ' + this.intervalId);
        },

        stopTimer() {
            clearInterval(this.intervalId);
        },

        resetTimer() {
            this.minsPassed = 0;
            this.secondsPassed = 0;
        },

        getTime() {
            let secondsFormatted = this.secondsPassed < 10 ?
                `0${this.secondsPassed}` :
                this.secondsPassed
            return `${this.minutesPassed}:${secondsFormatted}`
        },
    }
    // timer.startTimer();
    // timer.stopTimer();/