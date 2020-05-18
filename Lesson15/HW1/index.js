//calculator with memo

export function createCalculator() {
    let result = 0;

    const add = num => {
        result += num;
    }

    const decrease = num => {
        result -= num;
    }
    const reset = () => {
        result = 0;
    }

    const getMemo = () => {
        return result;
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
}

const calculator1 = createCalculator();
calculator1.add(5);
console.log(calculator1.getMemo());