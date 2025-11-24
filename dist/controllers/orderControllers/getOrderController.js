"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderController = void 0;
class GetOrderController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing order id"
            });
        }
        try {
            const order = await this.service.findOrderById(id);
            return res.status(200).json({
                ok: true,
                order: order
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
exports.GetOrderController = GetOrderController;
//# sourceMappingURL=getOrderController.js.map