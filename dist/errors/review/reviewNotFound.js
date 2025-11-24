"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewNotFound = void 0;
class ReviewNotFound extends Error {
    reviewId;
    constructor(id) {
        const message = `The review with id ${id} can't be reached`;
        super(message);
        this.reviewId = id;
        this.name = 'ReviewNotFound';
    }
}
exports.ReviewNotFound = ReviewNotFound;
//# sourceMappingURL=reviewNotFound.js.map