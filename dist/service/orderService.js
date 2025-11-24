"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const order_1 = require("../entities/order");
const ordersNotFound_1 = require("../errors/order/ordersNotFound");
const orderNotFound_1 = require("../errors/order/orderNotFound");
class orderService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findOrderById(id) {
        const order = await this.helper.findOrderById(id);
        if (!order) {
            throw new orderNotFound_1.OrderNotFound(id);
        }
        return order;
    }
    async findOrders() {
        const orders = await this.helper.findOrders();
        if (!orders) {
            throw new ordersNotFound_1.OrdersNotFound();
        }
        return orders;
    }
    async createOrder(clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime) {
        const order = order_1.Order.create(clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime);
        return this.helper.saveOrder(order);
    }
    async updateOrder(id, specialRequests, totalValue, totalCurrency, state, deliveryTime) {
        const existing = await this.findOrderById(id);
        const updatedOrder = existing.update({ specialRequests, totalValue, totalCurrency, state, deliveryTime });
        return this.helper.saveOrder(updatedOrder);
    }
    async deleteOrder(id) {
        await this.findOrderById(id);
        await this.helper.deleteOrder(id);
    }
}
exports.orderService = orderService;
//# sourceMappingURL=orderService.js.map