"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchDishPriceController = void 0;
class PatchDishPriceController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, priceValue, priceCurrency } = req.body;
        try {
            await this.service.updateDish(id, priceValue, priceCurrency);
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
exports.PatchDishPriceController = PatchDishPriceController;
//# sourceMappingURL=patchDishPriceController.js.map