// input: string!, strin2;
// output: number = quantity of entries of string2 in string1;

const countOccurences = (str1, elem) => {
    if (elem.length === 0) return null;
    return occurences = str1.split(elem).length - 1;
    // let occurences = str1.match(elem)   
}

// const string1 = 'language whose formatting conventions should';
// const string2 = 'a'
// let res = countOccurences(string1, string2)
// console.log(res);