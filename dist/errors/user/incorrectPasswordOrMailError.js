"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncorrectPasswordOrMailError = void 0;
class IncorrectPasswordOrMailError extends Error {
    constructor() {
        const message = "The email or password provided is incorrect";
        super(message);
        this.name = 'IncorrectPasswordOrMailError';
    }
}
exports.IncorrectPasswordOrMailError = IncorrectPasswordOrMailError;
//# sourceMappingURL=incorrectPasswordOrMailError.js.map