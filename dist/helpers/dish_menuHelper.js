"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishMenuHelper = void 0;
const helper_1 = require("./helper");
const dish_menu_model_1 = require("../model/dish_menu.model");
class dishMenuHelper extends helper_1.Helper {
    getEntitySchema() {
        return dish_menu_model_1.DishMenuModel;
    }
    async findDishMenuById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findDishMenus() {
        return (await this.getRepository()).find();
    }
    async saveDishMenu(dishMenu) {
        return (await this.getRepository()).save(dishMenu);
    }
    async deleteDishMenu(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.dishMenuHelper = dishMenuHelper;
//# sourceMappingURL=dish_menuHelper.js.map