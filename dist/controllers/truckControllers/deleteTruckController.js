"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTruckController = void 0;
class DeleteTruckController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing truck id"
            });
        }
        try {
            await this.service.deleteTruck(id);
            return res.status(204).json({
                ok: true,
                message: "Truck deleted successfully"
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
exports.DeleteTruckController = DeleteTruckController;
//# sourceMappingURL=deleteTruckController.js.map