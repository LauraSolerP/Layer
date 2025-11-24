"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishMenuService = void 0;
const dish_menu_1 = require("../entities/dish_menu");
const dishMenuNotFound_1 = require("../errors/dish_menu/dishMenuNotFound");
class dishMenuService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findDishMenuById(id) {
        const dishMenu = await this.helper.findDishMenuById(id);
        if (!dishMenu) {
            throw new dishMenuNotFound_1.DishMenuNotFound(id);
        }
        return dishMenu;
    }
    async findDishMenus() {
        return this.helper.findDishMenus();
    }
    async createDishMenu(menuId, dishId) {
        const dishMenu = dish_menu_1.DishMenu.create(menuId, dishId);
        return this.helper.saveDishMenu(dishMenu);
    }
    async updateDishMenu(id, menuId, dishId) {
        const existing = await this.findDishMenuById(id);
        const updatedDishMenu = existing.update({ menuId, dishId });
        return this.helper.saveDishMenu(updatedDishMenu);
    }
    async deleteDishMenu(id) {
        await this.findDishMenuById(id);
        await this.helper.deleteDishMenu(id);
    }
}
exports.dishMenuService = dishMenuService;
//# sourceMappingURL=dish_menuService.js.map