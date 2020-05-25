export function getOwnProps(obj) {
    const propArr = [];
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
            propArr.push(prop);
        }
    };
    return propArr;
}