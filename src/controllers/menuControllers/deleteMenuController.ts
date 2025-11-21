import { Request, Response } from "express"
import { menuService } from "../../service/menuService"

export class DeleteMenuController {

    constructor(private readonly service: menuService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing menu id"
            })
        }

        try {

            await this.service.deleteMenu(id)

            return res.status(204).json({
                ok: true,
                message: "Menu deleted successfully"
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
