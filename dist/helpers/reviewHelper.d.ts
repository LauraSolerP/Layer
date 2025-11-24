import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { Review } from "../entities/review";
export declare class reviewHelper extends Helper<Review> {
    getEntitySchema(): EntitySchema<Review>;
    findReviewById(id: string): Promise<Review | null>;
    findReviews(): Promise<Review[]>;
    saveReview(review: Review): Promise<Review>;
    deleteReview(id: string): Promise<void>;
}
//# sourceMappingURL=reviewHelper.d.ts.map