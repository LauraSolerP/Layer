import { Request, Response } from "express"
import { dishService } from "../../service/dishService"

export class DeleteDishController {

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

            await this.service.deleteDish(id)

            return res.status(204).json({
                ok: true,
                message: "Dish deleted successfully"
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
