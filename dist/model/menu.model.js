"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = void 0;
const typeorm_1 = require("typeorm");
const menu_1 = require("../entities/menu");
exports.MenuModel = new typeorm_1.EntitySchema({
    name: "menu",
    tableName: "menu",
    target: menu_1.Menu,
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
        season: {
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
//# sourceMappingURL=menu.model.js.map