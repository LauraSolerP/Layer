import { Request, Response } from "express"
import { reviewService } from "../../service/reviewService"

export class GetReviewController {

    constructor(private readonly service: reviewService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing review id"
            })
        }

        try {

            const review = await this.service.findReviewById(id)

            return res.status(200).json({
                ok: true,
                review: review
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
