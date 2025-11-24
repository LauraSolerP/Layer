"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishMenu = void 0;
const uuid_1 = require("uuid");
class DishMenu {
    id;
    menuId;
    dishId;
    constructor(id, menuId, dishId) {
        this.id = id;
        this.menuId = menuId;
        this.dishId = dishId;
    }
    getPrimitive() {
        return {
            id: this.id,
            menuId: this.menuId,
            dishId: this.dishId
        };
    }
    static create(menuId, dishId) {
        return new DishMenu((0, uuid_1.v4)(), menuId, dishId);
    }
    update(data) {
        return new DishMenu(this.id, data.menuId ?? this.menuId, data.dishId ?? this.dishId);
    }
}
exports.DishMenu = DishMenu;
//# sourceMappingURL=dish_menu.js.map