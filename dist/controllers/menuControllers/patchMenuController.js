"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMenuController = void 0;
class PatchMenuController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, description } = req.body;
        try {
            await this.service.updateMenu(id, description);
            return res.status(200).json({
                ok: true,
                message: "Menu updated successfully"
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
exports.PatchMenuController = PatchMenuController;
//# sourceMappingURL=patchMenuController.js.map