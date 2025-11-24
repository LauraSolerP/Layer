"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishModel = void 0;
const typeorm_1 = require("typeorm");
const dish_1 = require("../entities/dish");
exports.DishModel = new typeorm_1.EntitySchema({
    name: "dish",
    tableName: "dish",
    target: dish_1.Dish,
    columns: {
        id: {
            type: String,
            primary: true
        },
        truckId: {
            type: String
        },
        description: {
            type: String
        },
        availability: {
            type: String
        },
        priceValue: {
            type: Number
        },
        priceCurrency: {
            type: String
        }
    }
});
//# sourceMappingURL=dish.model.js.map