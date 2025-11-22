import { Helper } from "./helper";
import { ReviewModel } from "../model/review.model";
import { EntitySchema } from "typeorm";
import { Review } from "../entities/review";


export class ReviewHelper extends Helper<Review> {

    getEntitySchema(): EntitySchema<Review> {
        return ReviewModel
    }

    async findReviewById(id: string): Promise<Review | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findReviews(): Promise<Review[]> {
        return (await this.getRepository()).find()
    }

    async saveReview(review: Review): Promise<Review> {
        return (await this.getRepository()).save(review)
    }

    async deleteReview(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 