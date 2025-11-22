import { Request, Response } from "express"
import { orderService } from "../../service/orderService"

export class GetOrderController {

    constructor(private readonly service: orderService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing order id"
            })
        }

        try {

            const order = await this.service.findOrderById(id)

            return res.status(200).json({
                ok: true,
                order: order
            })

        } catch (error: any) {

            if (error.name === "OrderNotFound") {
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
