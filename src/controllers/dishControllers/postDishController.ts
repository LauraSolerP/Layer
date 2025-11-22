import { Request, Response } from "express"
import { dishService } from "../../service/dishService"

export class PostDishController {

    constructor(private readonly service: dishService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { truckId, description, availability, priceValue, priceCurrency } = req.body

        try {

            await this.service.createDish(truckId, description, availability, priceValue, priceCurrency)

            return res.status(200).json({
                ok: true,
                message: "Dish created successfully"
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
