"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersNotFound = void 0;
class OrdersNotFound extends Error {
    constructor() {
        const message = `The orders can't be reached`;
        super(message);
        this.name = 'OrdersNotFound';
    }
}
exports.OrdersNotFound = OrdersNotFound;
//# sourceMappingURL=ordersNotFound.js.map