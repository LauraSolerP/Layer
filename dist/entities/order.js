"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderState = void 0;
const uuid_1 = require("uuid");
var OrderState;
(function (OrderState) {
    OrderState["PENDING"] = "PENDING";
    OrderState["IN_PROGRESS"] = "IN_PROGRESS";
    OrderState["COMPLETED"] = "COMPLETED";
    OrderState["CANCELLED"] = "CANCELLED";
})(OrderState || (exports.OrderState = OrderState = {}));
class Order {
    id;
    clientId;
    truckId;
    specialRequests;
    totalValue;
    totalCurrency;
    state;
    deliveryTime;
    constructor(id, clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime) {
        this.id = id;
        this.clientId = clientId;
        this.truckId = truckId;
        this.specialRequests = specialRequests;
        this.totalValue = totalValue;
        this.totalCurrency = totalCurrency;
        this.state = state;
        this.deliveryTime = deliveryTime;
    }
    getPrimitive() {
        return {
            id: this.id,
            clientId: this.clientId,
            specialRequests: this.specialRequests,
            totalValue: this.totalValue,
            totalCurrency: this.totalCurrency,
            state: this.state,
            deliveryTime: this.deliveryTime
        };
    }
    static create(clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime) {
        return new Order((0, uuid_1.v4)(), clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime);
    }
    update(data) {
        return new Order(this.id, data.clientId ?? this.clientId, data.truckId ?? this.truckId, data.specialRequests ?? this.specialRequests, data.totalValue ?? this.totalValue, data.totalCurrency ?? this.totalCurrency, data.state ?? this.state, data.deliveryTime ?? this.deliveryTime);
    }
}
exports.Order = Order;
//# sourceMappingURL=order.js.map