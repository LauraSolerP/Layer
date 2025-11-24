"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistingEmailError = void 0;
class ExistingEmailError extends Error {
    email;
    constructor(email) {
        const message = `A user with the email ${email} already exists`;
        super(message);
        this.email = email;
        this.name = 'ExistingEmailError';
    }
}
exports.ExistingEmailError = ExistingEmailError;
//# sourceMappingURL=existingEmailError.js.map