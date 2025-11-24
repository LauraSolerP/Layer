"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMenuController = void 0;
class DeleteMenuController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing menu id"
            });
        }
        try {
            await this.service.deleteMenu(id);
            return res.status(204).json({
                ok: true,
                message: "Menu deleted successfully"
            });
        }
        catch (error) {
            if (error.name === "MenuNotFound") {
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
exports.DeleteMenuController = DeleteMenuController;
//# sourceMappingURL=deleteMenuController.js.map