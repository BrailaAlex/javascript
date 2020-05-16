import { user } from './index.js'

it('should return true if type of user is object', () => {
    const checkType = typeof user === 'object';
    expect(checkType).toEqual(true);
})
it('should return user\'s country', () => {
    const result = user;
    const checkAddress = user.address.country;
    expect(checkAddress).toEqual("Ukraine");
})
it('should return user\'s hobby', () => {
    const checkHobby = user.hobby;
    expect(checkHobby).toEqual('football');
})