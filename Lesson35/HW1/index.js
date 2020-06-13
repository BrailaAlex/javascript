export const parseUser = jsonString => {
    try {
        const parsedString = JSON.parse(jsonString);
        return parsedString;
    } catch (error) {
        return null;
    }
}