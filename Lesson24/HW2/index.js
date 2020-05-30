const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const dayOfWeek = (date, days) => {
        const day = new Date(date).getDate(); // getting date (from 1 to 31) by getDate
        const dateInFuture = new Date(date).setDate(day + days); //here we will get a string of numbers which are miliseconds from 01.01.1970 03:00
        return weekDays[new Date(dateInFuture).getDay()]; // with method getDay we will receave a number of a day in a week from 0 to 6
    }
    // const result = dayOfWeek(new Date(2019, 0, 1), 12);
    // console.log(result);

// console.log(weekDays[result]);