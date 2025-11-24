"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutEventController = void 0;
class PutEventController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        const { location, fromDate, toDate } = req.body;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing event id"
            });
        }
        try {
            await this.service.updateEvent(id, location, fromDate, toDate);
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
exports.PutEventController = PutEventController;
//# sourceMappingURL=putEventController.js.map