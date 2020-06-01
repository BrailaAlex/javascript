//mark up admins
// input: two arrays
// output: array of objects

// algo:
//1. setting property isAdmin for every user
//2. compare users id to adminids array elements
//2. if they coincide, add to user object property isAdmin:true
//3. if there are no coincides, thought isAdmin: false.

const adminsIds = ['1', '3'];
const users = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Ann' },
]

const markAdmins = (users, adminsIds) => {
    return users.map(user => {
        let isAdmin = adminsIds.includes(user.id); //return Boolean quality
        return {...user, isAdmin };
    });
}

const markAdmins1 = (users, adminsIds) => users
    .map(user => ({...user, isAdmin: adminsIds.includes(user.id) }));

console.log(markAdmins1(users, adminsIds));