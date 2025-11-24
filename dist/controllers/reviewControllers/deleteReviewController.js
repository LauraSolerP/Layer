"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReviewController = void 0;
class DeleteReviewController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing review id"
            });
        }
        try {
            await this.service.deleteReview(id);
            return res.status(204).json({
                ok: true,
                message: "Review deleted successfully"
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
exports.DeleteReviewController = DeleteReviewController;
//# sourceMappingURL=deleteReviewController.js.map