import { Request, Response } from "express"
import { dishService } from "../../service/dishService"

export class GetDishController {

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

            const dish = await this.service.findDishById(id)

            return res.status(200).json({
                ok: true,
                dish: dish
            })

        } catch (error: any) {

            if (error.name === "DishNotFound") {
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
