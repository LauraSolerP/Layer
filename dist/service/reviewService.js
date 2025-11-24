"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewService = void 0;
const review_1 = require("../entities/review");
const reviewNotFound_1 = require("../errors/review/reviewNotFound");
class reviewService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findReviewById(id) {
        const review = await this.helper.findReviewById(id);
        if (!review) {
            throw new reviewNotFound_1.ReviewNotFound(id);
        }
        return review;
    }
    async findReviews() {
        return this.helper.findReviews();
    }
    async createReview(clientId, orderId, description) {
        const review = review_1.Review.create(clientId, orderId, description);
        return this.helper.saveReview(review);
    }
    async updateReview(id, description) {
        const existing = await this.findReviewById(id);
        const updatedReview = existing.update({ description });
        return this.helper.saveReview(updatedReview);
    }
    async deleteReview(id) {
        await this.findReviewById(id);
        await this.helper.deleteReview(id);
    }
}
exports.reviewService = reviewService;
//# sourceMappingURL=reviewService.js.map