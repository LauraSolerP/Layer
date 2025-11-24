"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDishesController = void 0;
class GetDishesController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        try {
            const dishes = await this.service.findDishes();
            return res.status(200).json({
                ok: true,
                dishes: dishes
            });
        }
        catch (error) {
            if (error.name === "DishNotFound") {
                return res.status(404).json({
                    ok: false,
                    message: error.message
                });
            }
            return res.status(500).json({
                ok: false,
                message: "Server internal error",
                error: error.message
            });
        }
    }
}
exports.GetDishesController = GetDishesController;
//# sourceMappingURL=getDishesController.js.map