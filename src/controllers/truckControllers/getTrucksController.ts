import { Request, Response } from "express";
import { truckService } from "../../service/truckService";

export class GetTrucksController {

    constructor(private readonly service: truckService) { }

    async run(req: Request, res: Response): Promise<Response> {

        try {

            const trucks = await this.service.findTrucks()

            return res.status(200).json({
                ok: true,
                trucks: trucks
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