// input: string!, strin2;
// output: number = quantity of entries of string2 in string1;

const countOccurrences = (str, substr) => {
    if (substr.length === 0) return null;
    return str.split(substr).length - 1;

}

// const string1 = 'language whose formatting conventions should';
// const string2 = 't'
// let res = countOccurrences(string1, string2)
// console.log(res);