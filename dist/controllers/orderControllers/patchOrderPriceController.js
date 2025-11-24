"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchOrderPriceController = void 0;
class PatchOrderPriceController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, totalValue, totalCurrency } = req.body;
        try {
            await this.service.updateOrder(id, totalValue, totalCurrency);
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
exports.PatchOrderPriceController = PatchOrderPriceController;
//# sourceMappingURL=patchOrderPriceController.js.map