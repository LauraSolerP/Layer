"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEventsController = void 0;
class GetEventsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        try {
            const events = await this.service.findEvents();
            return res.status(200).json({
                ok: true,
                events: events
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
exports.GetEventsController = GetEventsController;
//# sourceMappingURL=getEventsController.js.map