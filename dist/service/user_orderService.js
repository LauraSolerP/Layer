"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOrderService = void 0;
const user_order_1 = require("../entities/user_order");
const userOrderNotFound_1 = require("../errors/user_order/userOrderNotFound");
const userOrdersNotFound_1 = require("../errors/user_order/userOrdersNotFound");
class userOrderService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findUserOrderById(id) {
        const userOrder = await this.helper.findUserOrderById(id);
        if (!userOrder) {
            throw new userOrderNotFound_1.UserOrderNotFound(id);
        }
        return userOrder;
    }
    async findUserOrders() {
        const userOrders = await this.helper.findUserOrders();
        if (!userOrders) {
            throw new userOrdersNotFound_1.UserOrdersNotFound();
        }
        return userOrders;
    }
    async findUserOrdersByDishId(dishId) {
        const userOrders = await this.helper.findUserOrdersByDishId(dishId);
        if (!userOrders) {
            throw new userOrdersNotFound_1.UserOrdersNotFound();
        }
        return userOrders;
    }
    async createUserOrder(userId, orderId, dishId) {
        const userOrder = user_order_1.UserOrder.create(userId, orderId, dishId);
        return this.helper.saveUserOrder(userOrder);
    }
    async updateUserOrder(id, userId, orderId, dishId) {
        const existing = await this.findUserOrderById(id);
        const updatedUserOrder = existing.update({ userId, orderId, dishId });
        return this.helper.saveUserOrder(updatedUserOrder);
    }
    async deleteUserOrder(id) {
        await this.findUserOrderById(id);
        await this.helper.deleteUserOrder(id);
    }
}
exports.userOrderService = userOrderService;
//# sourceMappingURL=user_orderService.js.map