 function addPropertyV1(userData, userId) {
     userData.id = userId;
     return userData;
 };

 function addPropertyV2(userData, userId) {
     const sourceData = { id: userId };
     return userData = Object.assign(userData, sourceData);
 };

 function addPropertyV3(userData, userId) {
     const cloneData = Object.assign({}, userData)
     const sourceData = { id: userId };
     returnedData = Object.assign(cloneData, sourceData);
     return cloneData;
 };

 function addPropertyV4(userData, userId) {
     //  const cloneData = Object.assign({}, userData)
     return returnedData = {...userData, id: userId };
 };

 const user = {
     name: 'Add',
 }
 const result = addPropertyV4(user, '3256897414');

 console.log(result);