"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReviewsController = void 0;
class GetReviewsController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        try {
            const reviews = await this.service.findReviews();
            return res.status(200).json({
                ok: true,
                reviews: reviews
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
exports.GetReviewsController = GetReviewsController;
//# sourceMappingURL=getReviewsController.js.map