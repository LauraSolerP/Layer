import { Request, Response } from "express"
import { menuService } from "../../service/menuService"

export class PatchMenuController {

    constructor(private readonly service: menuService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id, description } = req.body

        try {

            await this.service.updateMenu(id, description)

            return res.status(200).json({
                ok: true,
                message: "Menu updated successfully"
            })

        } catch (error: any) {

            if (error.name === "MenuNotFound") {
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
