"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostReviewController = void 0;
class PostReviewController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { clientId, orderId, description } = req.body;
        try {
            await this.service.createReview(clientId, orderId, description);
            return res.status(200).json({
                ok: true,
                message: "Review created successfully"
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
exports.PostReviewController = PostReviewController;
//# sourceMappingURL=postReviewController.js.map