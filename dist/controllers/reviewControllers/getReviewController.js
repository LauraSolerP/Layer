"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReviewController = void 0;
class GetReviewController {
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
            const review = await this.service.findReviewById(id);
            return res.status(200).json({
                ok: true,
                review: review
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
exports.GetReviewController = GetReviewController;
//# sourceMappingURL=getReviewController.js.map