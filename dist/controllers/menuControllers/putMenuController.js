"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutMenuController = void 0;
class PutMenuController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        const { description, season, priceValue, priceCurrency } = req.body;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing menu id"
            });
        }
        try {
            await this.service.updateMenu(id, description, season, priceValue, priceCurrency);
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
exports.PutMenuController = PutMenuController;
//# sourceMappingURL=putMenuController.js.map