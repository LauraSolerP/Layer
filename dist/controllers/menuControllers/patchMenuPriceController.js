"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMenuPriceController = void 0;
class PatchMenuPriceController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, priceValue, priceCurrency } = req.body;
        try {
            await this.service.updateMenu(id, priceValue, priceCurrency);
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
exports.PatchMenuPriceController = PatchMenuPriceController;
//# sourceMappingURL=patchMenuPriceController.js.map