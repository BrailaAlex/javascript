//массив функций

var arr = [];

for (let i = 0; i < 10; i++) { //благодаря тому что мы задали i через let
    // для каждой итерации цикла задается свое лексическое окружение,
    //в котором замыкается свое значение i
    arr[i] = function() {
        return i;
    }
}

// console.log(arr[5]());
export { arr };