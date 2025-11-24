"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const uuid_1 = require("uuid");
class Review {
    id;
    clientId;
    orderId;
    description;
    constructor(id, clientId, orderId, description) {
        this.id = id;
        this.clientId = clientId;
        this.orderId = orderId;
        this.description = description;
    }
    getPrimitive() {
        return {
            id: this.id,
            clientId: this.clientId,
            orderId: this.orderId,
            description: this.description
        };
    }
    static create(clientId, orderId, description) {
        return new Review((0, uuid_1.v4)(), clientId, orderId, description);
    }
    update(data) {
        return new Review(this.id, data.clientId ?? this.clientId, data.orderId ?? this.orderId, data.description ?? this.description);
    }
}
exports.Review = Review;
//# sourceMappingURL=review.js.map