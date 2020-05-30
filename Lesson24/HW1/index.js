export const getDiff = (startDate, endDate) => {
    const daysDiff = endDate.getDay() - startDate.getDay();
    const hoursDiff = endDate.getHours() - startDate.getHours();
    const minutesDiff = endDate.getMinutes() - startDate.getMinutes();
    const secondsDiff = endDate.getSeconds() - startDate.getSeconds();
    return `${daysDiff}d ${hoursDiff}h ${minutesDiff}m ${secondsDiff}s`
}

// startDate = new Date(2156185181);
// endDate = new Date(2162185181);
// console.log(getDiff(startDate, endDate));