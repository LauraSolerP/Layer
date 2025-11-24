"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderNotFound = void 0;
class UserOrderNotFound extends Error {
    userOrderId;
    constructor(id) {
        const message = `The user order with id ${id} can't be reached`;
        super(message);
        this.userOrderId = id;
        this.name = 'UserOrderNotFound';
    }
}
exports.UserOrderNotFound = UserOrderNotFound;
//# sourceMappingURL=userOrderNotFound.js.map