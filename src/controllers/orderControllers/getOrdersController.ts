import { Request, Response } from "express";
import { orderService } from "../../service/orderService";

export class GetOrdersController {

    constructor(private readonly service: orderService) { }

    async run(req: Request, res: Response): Promise<Response> {

        try {

            const orders = await this.service.findOrders()

            return res.status(200).json({
                ok: true,
                orders: orders
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