"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutTruckController = void 0;
class PutTruckController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        const { ownerId, nom } = req.body;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing truck id"
            });
        }
        try {
            await this.service.updateTruck(id, ownerId, nom);
            return res.status(200).json({
                ok: true,
                message: "Truck updated successfully"
            });
        }
        catch (error) {
            if (error.name === "TruckNotFound") {
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
exports.PutTruckController = PutTruckController;
//# sourceMappingURL=putTruckController.js.map