"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrdersNotFound = void 0;
class UserOrdersNotFound extends Error {
    constructor() {
        const message = `The user orders can't be reached`;
        super(message);
        this.name = 'UserOrdersNotFound';
    }
}
exports.UserOrdersNotFound = UserOrdersNotFound;
//# sourceMappingURL=userOrdersNotFound.js.map