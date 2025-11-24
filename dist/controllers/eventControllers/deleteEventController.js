"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEventController = void 0;
class DeleteEventController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing event id"
            });
        }
        try {
            await this.service.deleteEvent(id);
            return res.status(204).json({
                ok: true,
                message: "Event deleted successfully"
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
exports.DeleteEventController = DeleteEventController;
//# sourceMappingURL=deleteEventController.js.map