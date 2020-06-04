// const getDiff = (startDate, endDate) => {
//     msInDay = 1000 * 3600 * 24;
//     msInHour = 1000 * 3600;
//     msInMinute = 60000;
//     diffInMs = Math.abs(endDate.getTime() - startDate.getTime())
//     const daysDiff = Math.trunc(diffInMs / msInDay);
//     const hoursDiff = Math.trunc((diffInMs % msInDay) / msInHour);
//     const minutesDiff = Math.trunc((diffInMs % msInDay) % msInHour / msInMinute);
//     const secondsDiff = Math.trunc((diffInMs % msInDay) % msInHour % msInMinute / 1000);
//     return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`
// }

function getDiff(startDate, endDate) {
    const millSecPerMinute = 60 * 1000;
    const millSecPerHour = 60 * millSecPerMinute;
    const millSecPerDay = 24 * millSecPerHour;
    const diffMs = Math.abs(endDate - startDate);
    const countDays = Math.trunc(diffMs / millSecPerDay);
    const restOfDayInMs = diffMs % millSecPerDay;
    const countHours = Math.trunc((restOfDayInMs) / millSecPerHour);
    const restOfHourInMs = restOfDayInMs % millSecPerHour;
    const countMinutes = Math.trunc((restOfHourInMs) / millSecPerMinute);
    const restOfMinutesInMs = restOfHourInMs % millSecPerMinute
    const countSeconds = Math.trunc(restOfMinutesInMs / 1000);

    return `${countDays}d ${countHours}h ${countMinutes}m ${countSeconds}s`;
}

export { getDiff };

// startDate = new Date(2019, 11, 3, 12, 20, 30);
// endDate = new Date(2019, 11, 7, 11, 40, 23);
// console.log(getDiff(startDate, endDate));