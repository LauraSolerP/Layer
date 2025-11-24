"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishMenuModel = void 0;
const typeorm_1 = require("typeorm");
const dish_menu_1 = require("../entities/dish_menu");
exports.DishMenuModel = new typeorm_1.EntitySchema({
    name: "dish_menu",
    tableName: "dish_menu",
    target: dish_menu_1.DishMenu,
    columns: {
        id: {
            type: String,
            primary: true
        },
        menuId: {
            type: String
        },
        dishId: {
            type: String
        }
    }
});
//# sourceMappingURL=dish_menu.model.js.map