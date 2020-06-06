// pinger(num, period)

const pinger = (num, period) => {
    console.log('Ping');
    let i = num;
    const interval = setInterval(() => {
        if (--i > 0) {
            console.log('Ping');
        } else {
            clearInterval(interval)
        }
    }, period);

    // setTimeout(() => clearInterval(interval), num * period);
};

pinger(5, 1000);
export { pinger };