import { Request, Response } from "express"
import { reviewService } from "../../service/reviewService"

export class PutReviewController {

    constructor(private readonly service: reviewService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id, description } = req.body

        try {

            await this.service.updateReview(id, description)

            return res.status(200).json({
                ok: true,
                message: "Review updated successfully"
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
