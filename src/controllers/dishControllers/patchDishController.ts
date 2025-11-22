import { Request, Response } from "express"
import { dishService } from "../../service/dishService"

export class PatchDishController {

    constructor(private readonly service: dishService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id, description } = req.body

        try {

            await this.service.updateDish(id, description)

            return res.status(200).json({
                ok: true,
                message: "Dish updated successfully"
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
