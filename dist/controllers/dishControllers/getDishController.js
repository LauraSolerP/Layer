"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDishController = void 0;
class GetDishController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing dish id"
            });
        }
        try {
            const dish = await this.service.findDishById(id);
            return res.status(200).json({
                ok: true,
                dish: dish
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
exports.GetDishController = GetDishController;
//# sourceMappingURL=getDishController.js.map