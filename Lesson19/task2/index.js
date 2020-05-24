export function getOwnProps(obj) {
    let propArr = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj !== 'function') {
            propArr.push(prop);
        }
    };
    return propArr;
}