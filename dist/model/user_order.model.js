"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderModel = void 0;
const typeorm_1 = require("typeorm");
const user_order_1 = require("../entities/user_order");
exports.UserOrderModel = new typeorm_1.EntitySchema({
    name: "user_order",
    tableName: "user_order",
    target: user_order_1.UserOrder,
    columns: {
        id: {
            type: String,
            primary: true
        },
        userId: {
            type: String
        },
        orderId: {
            type: String
        },
        dishId: {
            type: String
        }
    }
});
//# sourceMappingURL=user_order.model.js.map