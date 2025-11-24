"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const typeorm_1 = require("typeorm");
const order_1 = require("../entities/order");
exports.OrderModel = new typeorm_1.EntitySchema({
    name: "order",
    tableName: "order",
    target: order_1.Order,
    columns: {
        id: {
            type: String,
            primary: true
        },
        clientId: {
            type: String
        },
        truckId: {
            type: String
        },
        specialRequests: {
            type: String
        },
        totalValue: {
            type: Number
        },
        totalCurrency: {
            type: String
        },
        state: {
            type: String
        },
        deliveryTime: {
            type: Date
        }
    }
});
//# sourceMappingURL=order.model.js.map