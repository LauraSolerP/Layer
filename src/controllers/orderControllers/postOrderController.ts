import { Request, Response } from "express"
import { orderService } from "../../service/orderService"

export class PostOrderController {

    constructor(private readonly service: orderService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime } = req.body

        try {

            await this.service.createOrder(clientId, truckId, specialRequests, totalValue, totalCurrency, state, deliveryTime)

            return res.status(200).json({
                ok: true,
                message: "Order created successfully"
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
