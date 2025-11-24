"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDishController = void 0;
class PostDishController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { truckId, description, availability, priceValue, priceCurrency } = req.body;
        try {
            await this.service.createDish(truckId, description, availability, priceValue, priceCurrency);
            return res.status(200).json({
                ok: true,
                message: "Dish created successfully"
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                message: "Server internal error",
                error: error.message
            });
        }
    }
}
exports.PostDishController = PostDishController;
//# sourceMappingURL=postDishController.js.map