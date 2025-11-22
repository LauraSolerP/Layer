import { Request, Response } from "express"
import { orderService } from "../../service/orderService"

export class DeleteOrderController {

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

            await this.service.deleteOrder(id)

            return res.status(204).json({
                ok: true,
                message: "Order deleted successfully"
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
