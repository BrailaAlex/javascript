class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    };
    get _id() {
        return this._id;
    }
    get _name() {
        return this._name;
    }
    get _sessionId() {
        return this._sessionIdd;
    }
};

class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    };

    get _users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map(i => i._name);
    };

    getUserIds() {
        return this._users.map(i => i._id);
    };

    getUserNameById(userId) {
        let findById = this._users.find(i => i._id === userId);
        return findById === undefined ? [] : findById._name;
    };
};

export { User, UserRepository };