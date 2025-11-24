"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOrderHelper = void 0;
const helper_1 = require("./helper");
const user_order_model_1 = require("../model/user_order.model");
class userOrderHelper extends helper_1.Helper {
    getEntitySchema() {
        return user_order_model_1.UserOrderModel;
    }
    async findUserOrderById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findUserOrders() {
        return (await this.getRepository()).find();
    }
    async findUserOrdersByDishId(dishId) {
        return (await this.getRepository()).find({ where: { dishId } });
    }
    async saveUserOrder(userOrder) {
        return (await this.getRepository()).save(userOrder);
    }
    async deleteUserOrder(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.userOrderHelper = userOrderHelper;
//# sourceMappingURL=user_orderHelper.js.map