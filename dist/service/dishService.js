"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishService = void 0;
const dish_1 = require("../entities/dish");
const dishNotFound_1 = require("../errors/dish/dishNotFound");
class dishService {
    helper;
    userOrderService;
    constructor(helper, userOrderService) {
        this.helper = helper;
        this.userOrderService = userOrderService;
    }
    async findDishById(id) {
        const dish = await this.helper.findDishById(id);
        if (!dish) {
            throw new dishNotFound_1.DishNotFound(id);
        }
        return dish;
    }
    async findDishes() {
        return this.helper.findDishes();
    }
    async getDishReservationCount(dishId) {
        const orders = await this.userOrderService.findUserOrdersByDishId(dishId);
        return orders.length;
    }
    async createDish(truckId, description, availability, priceValue, priceCurrency) {
        const dish = dish_1.Dish.create(truckId, description, availability, priceValue, priceCurrency);
        return this.helper.saveDish(dish);
    }
    async updateDish(id, description, availability, priceValue, priceCurrency) {
        const existing = await this.findDishById(id);
        const updatedDish = existing.update({ description, availability, priceValue, priceCurrency });
        const saved = await this.helper.saveDish(updatedDish);
        if (availability === dish_1.Availability.OUTOFSTOCK) {
            const all = await this.findDishes();
            const alternatives = all.filter(d => d.id !== saved.id &&
                d.truckId === saved.truckId &&
                d.availability === dish_1.Availability.AVAILABLE);
            return { updated: saved, alternatives };
        }
        return { updated: saved, alternatives: [] };
    }
    async deleteDish(id) {
        await this.findDishById(id);
        await this.helper.deleteDish(id);
    }
}
exports.dishService = dishService;
//# sourceMappingURL=dishService.js.map