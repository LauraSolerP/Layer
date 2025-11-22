import { Request, Response } from "express"
import { reviewService } from "../../service/reviewService"

export class PostReviewController {

    constructor(private readonly service: reviewService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { clientId, orderId, description } = req.body

        try {

            await this.service.createReview(clientId, orderId, description)

            return res.status(200).json({
                ok: true,
                message: "Review created successfully"
            })

        } catch (error: any) {

            return res.status(500).json({
                ok: false,
                message: "Server internal error",
                error: error.message
            })
        }
    }
}
