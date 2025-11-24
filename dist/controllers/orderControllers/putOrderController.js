"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutOrderController = void 0;
class PutOrderController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        const { clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime } = req.body;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing order id"
            });
        }
        try {
            await this.service.updateOrder(id, specialRequests, totalValue, totalCurrency, state, deliveryTime);
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
exports.PutOrderController = PutOrderController;
//# sourceMappingURL=putOrderController.js.map