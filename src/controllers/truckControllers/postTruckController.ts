import { Request, Response } from "express"
import { truckService } from "../../service/truckService"

export class PostTruckController {

    constructor(private readonly service: truckService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { ownerId, nom } = req.body

        try {

            await this.service.createTruck(ownerId, nom)

            return res.status(200).json({
                ok: true,
                message: "Truck created successfully"
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
