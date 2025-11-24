"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderNotFound = void 0;
class OrderNotFound extends Error {
    orderId;
    constructor(id) {
        const message = `The order with id ${id} can't be reached`;
        super(message);
        this.orderId = id;
        this.name = 'OrderNotFound';
    }
}
exports.OrderNotFound = OrderNotFound;
//# sourceMappingURL=orderNotFound.js.map