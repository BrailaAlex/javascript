 function addPropertyV1(userData, userId) {
     userData.id = userId;
     return userData;
 };

 function addPropertyV2(userData, userId) {
     const sourceData = { id: userId };
     return Object.assign(userData, sourceData);
 };

 function addPropertyV3(userData, userId) {
     const sourceData = { id: userId };
     return Object.assign({}, sourceData, userData);
 };

 function addPropertyV4(userData, userId) {
     return returnedData = {...userData, id: userId };
 };

 const user = {
     name: 'Add',
 }
 const result = addPropertyV3(user, '3256897414');

 console.log(result);