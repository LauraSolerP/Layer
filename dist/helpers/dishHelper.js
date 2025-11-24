"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishHelper = void 0;
const helper_1 = require("./helper");
const dish_model_1 = require("../model/dish.model");
class dishHelper extends helper_1.Helper {
    getEntitySchema() {
        return dish_model_1.DishModel;
    }
    async findDishById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findDishes() {
        return (await this.getRepository()).find();
    }
    async saveDish(dish) {
        return (await this.getRepository()).save(dish);
    }
    async deleteDish(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.dishHelper = dishHelper;
//# sourceMappingURL=dishHelper.js.map