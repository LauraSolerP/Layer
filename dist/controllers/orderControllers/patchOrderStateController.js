"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchOrderStateController = void 0;
class PatchOrderStateController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, state } = req.body;
        try {
            await this.service.updateOrder(id, state);
            return res.status(200).json({
                ok: true,
                message: "Order updated successfully"
            });
        }
        catch (error) {
            if (error.name === "OrderNotFound") {
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
exports.PatchOrderStateController = PatchOrderStateController;
//# sourceMappingURL=patchOrderStateController.js.map