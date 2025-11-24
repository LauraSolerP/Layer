"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventController = void 0;
class GetEventController {
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
            const event = await this.service.findEventById(id);
            return res.status(200).json({
                ok: true,
                event: event
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
exports.GetEventController = GetEventController;
//# sourceMappingURL=getEventController.js.map