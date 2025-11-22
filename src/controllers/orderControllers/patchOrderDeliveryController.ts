import { Request, Response } from "express"
import { orderService } from "../../service/orderService"

export class PatchOrderDeliveryController {

    constructor(private readonly service: orderService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id, deliveryTime } = req.body

        try {

            await this.service.updateOrder(id, deliveryTime)

            return res.status(200).json({
                ok: true,
                message: "Order updated successfully"
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
