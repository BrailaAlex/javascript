// input: string!, strin2;
// output: number = quantity of entries of string2 in string1;

const string1 = 'language whose formatting conventions should';
const string2 = 'a'
const countOccurences = (str1, elem) => {
    return occurences = str1.split(elem).length - 1;
    // let occurences = str1.match(elem)   
}

let res = countOccurences(string1, string2)
console.log(res);