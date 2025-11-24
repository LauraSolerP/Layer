"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserType = void 0;
const uuid_1 = require("uuid");
var UserType;
(function (UserType) {
    UserType["CLIENT"] = "CLIENT";
    UserType["OWNER"] = "OWNER";
    UserType["ADMIN"] = "ADMIN";
})(UserType || (exports.UserType = UserType = {}));
class User {
    id;
    name;
    surname;
    email;
    password;
    type;
    constructor(id, name, surname, email, password, type) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    getPrimitive() {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            type: this.type
        };
    }
    static create(name, surname, email, password, type = UserType.CLIENT) {
        return new User((0, uuid_1.v4)(), name, surname, email, password, type);
    }
    update(data) {
        return new User(this.id, data.name ?? this.name, data.surname ?? this.surname, data.email ?? this.email, data.password ?? this.password, data.type ?? this.type);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map