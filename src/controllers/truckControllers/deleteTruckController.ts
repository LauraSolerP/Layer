import { Request, Response } from "express"
import { truckService } from "../../service/truckService"

export class DeleteTruckController {

    constructor(private readonly service: truckService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing truck id"
            })
        }

        try {

            await this.service.deleteTruck(id)

            return res.status(204).json({
                ok: true,
                message: "Truck deleted successfully"
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
