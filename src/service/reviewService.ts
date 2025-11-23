import { Review } from "../entities/review";
import { ReviewNotFound } from "../errors/review/reviewNotFound";
import { reviewHelper } from "../helpers/reviewHelper";


export class reviewService {

    constructor(private readonly helper: reviewHelper) { }

    async findReviewById(id: string): Promise<Review> {

        const review = await this.helper.findReviewById(id)

        if (!review) {
            throw new ReviewNotFound(id)
        }

        return review

    }

    async findReviews(): Promise<Review[]> {
        return this.helper.findReviews()
    }

    async createReview(clientId: string, orderId: string, description: string): Promise<Review> {

        const review = Review.create(clientId, orderId, description)

        return this.helper.saveReview(review)
    }

    async updateReview(id: string, description?: string): Promise<Review> {
        const existing = await this.findReviewById(id)

        const updatedReview = existing.update({ description })

        return this.helper.saveReview(updatedReview)
    }

    async deleteReview(id: string): Promise<void> {
        await this.findReviewById(id)
        await this.helper.deleteReview(id)
    }

}