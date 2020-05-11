// concatProps


// for (let key in user) {
//     console.log(user[key]);
// }

const concatProps = obj => {
        const arr = [];

        for (let key in obj) {
            arr.push(obj[key]);
            // arr = arr.concat(obj[key]);
        }

        return arr;
    }
    // const user = {
    //     name: 'Tom',
    //     key: 17,
    //     age: 21,
    // };
    // console.log(concatProps(user));

// user => ['Tom', 17] // function, that gives back an array with all the properties of object