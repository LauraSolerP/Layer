import { Request, Response } from "express";
import { reviewService } from "../../service/reviewService";

export class GetReviewsController {

    constructor(private readonly service: reviewService) { }

    async run(req: Request, res: Response): Promise<Response> {

        try {

            const reviews = await this.service.findReviews()

            return res.status(200).json({
                ok: true,
                reviews: reviews
            })

        } catch (error: any) {

            if (error.name === "ReviewNotFound") {
                return res.status(404).json({
                    ok: false,
                    message: error.message
                })
            }

            return res.status(500).json({
                ok: false,
                message: "Server internal error",
                error: error.message
            })
        }

    }
}