"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedUserError = void 0;
class UnauthorizedUserError extends Error {
    userId;
    constructor(id) {
        const message = `The user with id ${id} is not authorized to perform this action`;
        super(message);
        this.userId = id;
        this.name = 'UnauthorizedUser';
    }
}
exports.UnauthorizedUserError = UnauthorizedUserError;
//# sourceMappingURL=unauthorizedUserError.js.map