import { Request, Response } from "express"
import { eventService } from "../../service/eventService"

export class PostEventController {

    constructor(private readonly service: eventService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { location, fromDate, toDate } = req.body

        try {

            await this.service.createEvent(location, fromDate, toDate)

            return res.status(200).json({
                ok: true,
                message: "Event created successfully"
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
