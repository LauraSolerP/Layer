import { Request, Response } from "express";
import { dishService } from "../../service/dishService";

export class GetDishesController {

    constructor(private readonly service: dishService) { }

    async run(req: Request, res: Response): Promise<Response> {

        try {

            const dishes = await this.service.findDishes()

            return res.status(200).json({
                ok: true,
                dishes: dishes
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