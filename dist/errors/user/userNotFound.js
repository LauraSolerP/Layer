"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFound = void 0;
class UserNotFound extends Error {
    userId;
    constructor(id) {
        const message = `The user with id ${id} can't be reached`;
        super(message);
        this.userId = id;
        this.name = 'UserNotFound';
    }
}
exports.UserNotFound = UserNotFound;
//# sourceMappingURL=userNotFound.js.map