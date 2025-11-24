"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMenuController = void 0;
class PostMenuController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { truckId, description, season, priceValue } = req.body;
        try {
            await this.service.createMenu(truckId, description, season, priceValue);
            return res.status(200).json({
                ok: true,
                message: "Menu created successfully"
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
exports.PostMenuController = PostMenuController;
//# sourceMappingURL=postMenuController.js.map