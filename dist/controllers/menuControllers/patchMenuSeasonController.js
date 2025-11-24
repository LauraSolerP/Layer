"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMenuSeasonController = void 0;
class PatchMenuSeasonController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, season } = req.body;
        try {
            await this.service.updateMenu(id, season);
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
exports.PatchMenuSeasonController = PatchMenuSeasonController;
//# sourceMappingURL=patchMenuSeasonController.js.map