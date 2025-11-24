"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchDishController = void 0;
class PatchDishController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, description } = req.body;
        try {
            await this.service.updateDish(id, description);
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
exports.PatchDishController = PatchDishController;
//# sourceMappingURL=patchDishController.js.map