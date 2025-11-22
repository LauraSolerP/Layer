import { Request, Response } from "express";
import { eventService } from "../../service/eventService";

export class GetEventsController {

    constructor(private readonly service: eventService) { }

    async run(req: Request, res: Response): Promise<Response> {

        try {

            const events = await this.service.findEvents()

            return res.status(200).json({
                ok: true,
                events: events
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