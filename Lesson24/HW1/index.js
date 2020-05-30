export const getDiff = (startDate, endDate) => {
    const daysDiff = startDate.getDay() - endDate.getDay();
    const hoursDiff = startDate.getHours() - endDate.getHours();
    const minutesDiff = startDate.getMinutes() - endDate.getMinutes();
    const secondsDiff = startDate.getSeconds() - endDate.getSeconds();
    return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`
}

// startDate = new Date(2156185181);
// endDate = new Date(2162185181);
// console.log(getDiff(startDate, endDate));