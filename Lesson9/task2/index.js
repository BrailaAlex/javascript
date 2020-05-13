// copyObj

// const user = {
//     'Tom': 17,
//     'john Doe': 15,
//     father: {
//         name: 'Bob',
//     },
// };

// const players = {
//     'john Doe': 19,
//     'Bob': 18,
// }

// const res = Object.assign({}, user, players);

// console.log(res)

// const copyObj = obj => Object.assign({}, obj);
// console.log(copyObj(user))

// const player = {...user };
// console.log(player);

const user = {
    name: 'Tom',
    key: 17,
    height: 1.85,
};

// const { surname: myName = 'default' } = user; //default meaning logged only if it's not presented in object


// const { name: myName = 'default', ...restProps } = user; //destruction of object
// console.log(myName);

// const player = {
//     hobby: 'football',
//     ...restProps,
// }

const copyObj = obj => copy = Object.assign({}, obj);

// console.log(copyObj(user, user));
// console.log(user);