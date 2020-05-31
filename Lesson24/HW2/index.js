const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '02/21/2010' },
    { name: 'Sam', birthDate: '01/16/2010' },
    { name: 'Ann', birthDate: '03/12/2010' },
    { name: 'Lilly', birthDate: '02/09/2010' },
    { name: 'John', birthDate: '01/02/2010' },
];

const studentsBirthDays = students =>
    // {
    // let result = {}
    // months.map(mon => {
    //     result[mon] = [];
    // });

    // students.sort((a, b) => new Date(a.birthDate)
    //     .getTime() - new Date(b.birthDate).getTime())
    //     .map(student => {
    //     const month = months[new Date(student.birthDate).getMonth()]
    //     result[month].push(student.name)
    // });

    // Object.keys(result).map(el => {
    //     if (result[el].length === 0)
    //         delete result[el];
    // });
    students.sort((a, b) => new Date(a.birthDate)
        .getTime() - new Date(b.birthDate).getTime())
    .reduce((acc, student) => {
        console.log(acc);
        const month = months[new Date(student.birthDate).getMonth()]
        console.log(month);
        console.log(student.name);
        acc = {...acc,
            ... {
                [month]: [...[student.name]]
            }
        };
        console.log(acc[month]);
    }, {})

// return result;
// }


// export { studentsBirthDays };
studentsBirthDays(students)
    // console.log(studentsBirthDays(students));
    // console.log(students);