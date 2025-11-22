import { Request, Response } from "express"
import { truckService } from "../../service/truckService"

export class PatchTruckOwnerController {

    constructor(private readonly service: truckService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id, ownerId } = req.body

        try {

            await this.service.updateTruck(id, ownerId)

            return res.status(200).json({
                ok: true,
                message: "Truck updated successfully"
            })

        } catch (error: any) {

            if (error.name === "TruckNotFound") {
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
