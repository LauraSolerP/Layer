import { Review } from "../entities/review";
import { reviewHelper } from "../helpers/reviewHelper";
export declare class reviewService {
    private readonly helper;
    constructor(helper: reviewHelper);
    findReviewById(id: string): Promise<Review>;
    findReviews(): Promise<Review[]>;
    createReview(clientId: string, orderId: string, description: string): Promise<Review>;
    updateReview(id: string, description?: string): Promise<Review>;
    deleteReview(id: string): Promise<void>;
}
//# sourceMappingURL=reviewService.d.ts.map