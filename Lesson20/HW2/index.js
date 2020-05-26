class User {
    constructor(name, age, sessionId) {
        this._id = `${id}`;
        this._name = `${id}`;
        this._sessionId = `${sessionId}`;
    }
};

class UserRepository {
    constructor(arr) {
        this._users = Object.freeze(arr)
    }
    getUsersNames() {
        return this._users.map(obj => obj._name);
    }
    getUsersIds() {
        return this._users.map(obj => obj._id);
    }
    getUserNameById(id) {
        return this._users.find(obj => obj._id === id).name;
    }
};
export { User, UserRepository };