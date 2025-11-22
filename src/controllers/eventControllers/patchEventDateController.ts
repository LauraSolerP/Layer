import { Request, Response } from "express"
import { eventService } from "../../service/eventService"

export class PatchEventDateController {

    constructor(private readonly service: eventService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id, fromDate, toDate } = req.body

        try {

            await this.service.updateEvent(id, fromDate, toDate)

            return res.status(200).json({
                ok: true,
                message: "Event updated successfully"
            })

        } catch (error: any) {

            if (error.name === "EventNotFound") {
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
