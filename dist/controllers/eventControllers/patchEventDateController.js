"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchEventDateController = void 0;
class PatchEventDateController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, fromDate, toDate } = req.body;
        try {
            await this.service.updateEvent(id, fromDate, toDate);
            return res.status(200).json({
                ok: true,
                message: "Event updated successfully"
            });
        }
        catch (error) {
            if (error.name === "EventNotFound") {
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
exports.PatchEventDateController = PatchEventDateController;
//# sourceMappingURL=patchEventDateController.js.map