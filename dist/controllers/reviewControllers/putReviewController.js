"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutReviewController = void 0;
class PutReviewController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id, description } = req.body;
        try {
            await this.service.updateReview(id, description);
            return res.status(200).json({
                ok: true,
                message: "Review updated successfully"
            });
        }
        catch (error) {
            if (error.name === "ReviewNotFound") {
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
exports.PutReviewController = PutReviewController;
//# sourceMappingURL=putReviewController.js.map