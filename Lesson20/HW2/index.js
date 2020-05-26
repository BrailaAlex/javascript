export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    };
    get id() {
        return this._id;
    };
    get name() {
        return this._name;
    };
    get sessionId() {
        return this._sessionId;
    };
};

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    };

    get users() {
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


const user1 = new User(2568, 'Alex', 25564);
const user2 = new User(2545, 'Den', 25586);
const user3 = new User(2426, 'Ben', 25853);
const users = [user1, user2, user3]
console.log(users);