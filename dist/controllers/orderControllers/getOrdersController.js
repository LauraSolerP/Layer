"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrdersController = void 0;
class GetOrdersController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        try {
            const orders = await this.service.findOrders();
            return res.status(200).json({
                ok: true,
                orders: orders
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
exports.GetOrdersController = GetOrdersController;
//# sourceMappingURL=getOrdersController.js.map