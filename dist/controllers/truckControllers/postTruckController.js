"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTruckController = void 0;
class PostTruckController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { ownerId, nom } = req.body;
        try {
            await this.service.createTruck(ownerId, nom);
            return res.status(200).json({
                ok: true,
                message: "Truck created successfully"
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
exports.PostTruckController = PostTruckController;
//# sourceMappingURL=postTruckController.js.map