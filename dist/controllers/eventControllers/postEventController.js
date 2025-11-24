"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostEventController = void 0;
class PostEventController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { location, fromDate, toDate } = req.body;
        try {
            await this.service.createEvent(location, fromDate, toDate);
            return res.status(200).json({
                ok: true,
                message: "Event created successfully"
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
exports.PostEventController = PostEventController;
//# sourceMappingURL=postEventController.js.map