"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchDishAvailabilityController = void 0;
class PatchDishAvailabilityController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, availability } = req.body;
        try {
            const result = await this.service.updateDish(id, availability);
            return res.status(200).json({
                ok: true,
                message: "Dish updated successfully",
                dish: result.updated,
                alternatives: result.alternatives
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
exports.PatchDishAvailabilityController = PatchDishAvailabilityController;
//# sourceMappingURL=patchDishAvailabilityController.js.map