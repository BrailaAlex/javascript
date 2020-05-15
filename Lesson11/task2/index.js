// sortContacts

const contacts = [{
        name: 'Tom',
        phoneNumber: '666-66-66',
    },
    {
        name: 'Bob',
        phoneNumber: '555-55-55',
    },
    {
        name: 'Tim',
        phoneNumber: '444-44-44',
    },
    {
        name: 'Ann',
        phoneNumber: '333-33-33',
    },
    {
        name: 'Al',
        phoneNumber: '222-22-22',
    },

];

// input: array of objects
// output: Sorted by name order list of contacts

const sortContacts = (contacts, isAsc = true) => {
    if (!Array.isArray(contacts)) return null;
    if (!isAsc) return contacts
        .sort((a, b) => b.name.localeCompare(a.name));
    return contacts.
    sort((a, b) => a.name.localeCompare(b.name));

}
console.log(sortContacts(contacts));