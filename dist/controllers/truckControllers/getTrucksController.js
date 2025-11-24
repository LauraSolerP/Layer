"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTrucksController = void 0;
class GetTrucksController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        try {
            const trucks = await this.service.findTrucks();
            return res.status(200).json({
                ok: true,
                trucks: trucks
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
exports.GetTrucksController = GetTrucksController;
//# sourceMappingURL=getTrucksController.js.map