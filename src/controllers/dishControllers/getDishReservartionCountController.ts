import { Request, Response } from "express"
import { dishService } from "../../service/dishService"

export class GetDishReservationCountController {

    constructor(private readonly service: dishService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing dish id"
            })
        }

        try {

            const reservationCount = await this.service.getDishReservationCount(id)

            return res.status(200).json({
                ok: true,
                reservationCount: reservationCount
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
