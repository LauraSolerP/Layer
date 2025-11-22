import { Request, Response } from "express"
import { eventService } from "../../service/eventService"

export class DeleteEventController {

    constructor(private readonly service: eventService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing event id"
            })
        }

        try {

            await this.service.deleteEvent(id)

            return res.status(204).json({
                ok: true,
                message: "Event deleted successfully"
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
