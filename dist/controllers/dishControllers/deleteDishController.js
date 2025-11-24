"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDishController = void 0;
class DeleteDishController {
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
            await this.service.deleteDish(id);
            return res.status(204).json({
                ok: true,
                message: "Dish deleted successfully"
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
exports.DeleteDishController = DeleteDishController;
//# sourceMappingURL=deleteDishController.js.map