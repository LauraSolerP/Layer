"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOrderController = void 0;
class PostOrderController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime } = req.body;
        try {
            await this.service.createOrder(clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime);
            return res.status(200).json({
                ok: true,
                message: "Order created successfully"
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
exports.PostOrderController = PostOrderController;
//# sourceMappingURL=postOrderController.js.map