"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTruckOwnerController = void 0;
class PatchTruckOwnerController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, ownerId } = req.body;
        try {
            await this.service.updateTruck(id, ownerId);
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
exports.PatchTruckOwnerController = PatchTruckOwnerController;
//# sourceMappingURL=patchTruckOwnerController.js.map