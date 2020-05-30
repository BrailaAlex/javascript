const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const students = [
//     { name: 'Tom', birthDate: '01/15/2010' },
//     { name: 'Ben', birthDate: '02/21/2010' },
//     { name: 'Sam', birthDate: '01/16/2010' },
//     { name: 'Ann', birthDate: '03/12/2010' },
//     { name: 'Lilly', birthDate: '02/09/2010' },
//     { name: 'John', birthDate: '01/02/2010' },
// ];

export const studentsBirthDays = students => {
        let result = {}
        sortedStudents = [...students].sort((a, b) => new Date(a.birthDate)
            .getTime() - new Date(b.birthDate).getTime());

        months.map(mon => {
            result[mon] = [];
        });

        sortedStudents.map(student => {
            const month = months[new Date(student.birthDate).getMonth()]
            result[month].push(student.name)
        });

        Object.entries(result).map(el => {
            if (el[1].length === 0)
                delete result[el[0]];
        });
        return result;
    }
    // console.log(studentBirthDays(students));