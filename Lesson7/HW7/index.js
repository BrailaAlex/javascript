const filterNames = (arr, text) => arr.filter(name => (name.includes(text) && name.length > 5));

console.log(filterNames(['Jane', 'Violetta', 'Janetta', 'Kate', 'Matador'], 'ta'));