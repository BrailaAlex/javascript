//calc(3).add(2).mult(4).div(10).substract(5).result(); // -3

const calc = initValue => {
    let result = initValue;
    const calculator = {
        add(number) {
            result += number;
            return this; //it means we return an object we are working at;
        },
        substract(number) {
            result -= number;
            return this;
        },
        mult(number) {
            result *= number;
            console.log(this);
            return this;
        },
        div(number) {
            result /= number;
            return this;
        },
        result() {
            return result;
        }

    };
    return calculator;
}

const result = calc(3).add(2).mult(4).div(10).substract(5).result();

console.log(result);