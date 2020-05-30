export const getDiff = (startDate, endDate) => {
    msInDay = 1000 * 3600 * 24;
    msInHour = 1000 * 3600;
    msInMinute = 60000;
    diffInMs = Math.abs(endDate.getTime() - startDate.getTime())
    const daysDiff = Math.trunc(diffInMs / msInDay);
    const hoursDiff = Math.trunc((diffInMs % msInDay) / msInHour);
    const minutesDiff = Math.trunc((diffInMs % msInDay) % msInHour / msInMinute);
    const secondsDiff = Math.trunc((diffInMs % msInDay) % msInHour % msInMinute / 1000);
    return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`
}

startDate = new Date(2019, 11, 3, 12, 20, 30);
endDate = new Date(2019, 11, 7, 11, 40, 23);
console.log(getDiff(startDate, endDate));