"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderHelper = void 0;
const helper_1 = require("./helper");
const order_model_1 = require("../model/order.model");
class orderHelper extends helper_1.Helper {
    getEntitySchema() {
        return order_model_1.OrderModel;
    }
    async findOrderById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findOrders() {
        return (await this.getRepository()).find();
    }
    async saveOrder(order) {
        return (await this.getRepository()).save(order);
    }
    async deleteOrder(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.orderHelper = orderHelper;
//# sourceMappingURL=orderHelper.js.map