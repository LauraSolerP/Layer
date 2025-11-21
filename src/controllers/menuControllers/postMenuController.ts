import { Request, Response } from "express"
import { menuService } from "../../service/menuService"

export class PostMenuController {

    constructor(private readonly service: menuService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { truckId, description, season, priceValue } = req.body

        try {

            await this.service.createMenu(truckId, description, season, priceValue)

            return res.status(200).json({
                ok: true,
                message: "Menu created successfully"
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
