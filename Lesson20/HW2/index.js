class User {
    constructor(id, name, sessionId) {
        this._id = `${id}`;
        this._name = `${name}`;
        this._sessionId = `${sessionId}`;
    }
};

class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users)
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