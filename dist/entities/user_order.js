"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrder = void 0;
const uuid_1 = require("uuid");
class UserOrder {
    id;
    userId;
    orderId;
    dishId;
    constructor(id, userId, orderId, dishId) {
        this.id = id;
        this.userId = userId;
        this.orderId = orderId;
        this.dishId = dishId;
    }
    getPrimitive() {
        return {
            id: this.id,
            userId: this.userId,
            orderId: this.orderId,
            dishId: this.dishId
        };
    }
    static create(userId, orderId, dishId) {
        return new UserOrder((0, uuid_1.v4)(), userId, orderId, dishId);
    }
    update(data) {
        return new UserOrder(this.id, data.userId ?? this.userId, data.orderId ?? this.orderId, data.dishId ?? this.dishId);
    }
}
exports.UserOrder = UserOrder;
//# sourceMappingURL=user_order.js.map