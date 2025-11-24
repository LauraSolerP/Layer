"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchEventController = void 0;
class PatchEventController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, location } = req.body;
        try {
            await this.service.updateEvent(id, location);
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
exports.PatchEventController = PatchEventController;
//# sourceMappingURL=patchEventController.js.map