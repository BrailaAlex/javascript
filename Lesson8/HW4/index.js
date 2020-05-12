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
     let id = { id: userId };
     return Object.assign({...userData }, id);
 };

 const user = {
     name: 'Add',
 }
 const result = addPropertyV3(user, '3256897414');

 console.log(result);