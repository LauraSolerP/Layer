"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTruckNameController = void 0;
class PatchTruckNameController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, nom } = req.body;
        try {
            await this.service.updateTruck(id, nom);
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
exports.PatchTruckNameController = PatchTruckNameController;
//# sourceMappingURL=patchTruckNameController.js.map