"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewHelper = void 0;
const helper_1 = require("./helper");
const review_model_1 = require("../model/review.model");
class reviewHelper extends helper_1.Helper {
    getEntitySchema() {
        return review_model_1.ReviewModel;
    }
    async findReviewById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findReviews() {
        return (await this.getRepository()).find();
    }
    async saveReview(review) {
        return (await this.getRepository()).save(review);
    }
    async deleteReview(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.reviewHelper = reviewHelper;
//# sourceMappingURL=reviewHelper.js.map