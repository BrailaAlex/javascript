// input: string!, strin2;
// output: number = quantity of entries of string2 in string1;

const countOccurrences = (str1, elem) => {
    if (elem.length === 0) return null;
    let midArray = str1.split(elem);
    return occurences = midArray.length - 1;
    // let occurences = str1.match(elem)   
}

const string1 = 'language whose formatting conventions should';
const string2 = 't'
let res = countOccurrences(string1, string2)
console.log(res);