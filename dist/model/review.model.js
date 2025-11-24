"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = void 0;
const typeorm_1 = require("typeorm");
const review_1 = require("../entities/review");
exports.ReviewModel = new typeorm_1.EntitySchema({
    name: "review",
    tableName: "review",
    target: review_1.Review,
    columns: {
        id: {
            type: String,
            primary: true
        },
        clientId: {
            type: String
        },
        orderId: {
            type: String
        },
        description: {
            type: String
        }
    }
});
//# sourceMappingURL=review.model.js.map