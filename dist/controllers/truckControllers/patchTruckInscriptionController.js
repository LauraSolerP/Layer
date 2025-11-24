"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTruckInscriptionController = void 0;
class PatchTruckInscriptionController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, participation } = req.body;
        try {
            const result = await this.service.updateInscription(id, participation);
            return res.status(200).json({
                ok: true,
                message: "Inscription updated successfully",
                inscription: result.updated,
                alternatives: result.alternatives
            });
        }
        catch (error) {
            if (error.name === "InscriptionNotFound") {
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
exports.PatchTruckInscriptionController = PatchTruckInscriptionController;
//# sourceMappingURL=patchTruckInscriptionController.js.map