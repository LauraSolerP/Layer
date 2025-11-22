import { Request, Response } from "express"
import { reviewService } from "../../service/reviewService"

export class DeleteReviewController {

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

            await this.service.deleteReview(id)

            return res.status(204).json({
                ok: true,
                message: "Review deleted successfully"
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
