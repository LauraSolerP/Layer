"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutDishController = void 0;
class PutDishController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        const { description, availability, priceValue, priceCurrency } = req.body;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing dish id"
            });
        }
        try {
            await this.service.updateDish(id, description, availability, priceValue, priceCurrency);
            return res.status(200).json({
                ok: true,
                message: "Dish updated successfully"
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
exports.PutDishController = PutDishController;
//# sourceMappingURL=putDishController.js.map