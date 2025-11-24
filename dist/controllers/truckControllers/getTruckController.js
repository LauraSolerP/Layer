"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTruckController = void 0;
class GetTruckController {
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
            const truck = await this.service.findTruckById(id);
            return res.status(200).json({
                ok: true,
                truck: truck
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
exports.GetTruckController = GetTruckController;
//# sourceMappingURL=getTruckController.js.map