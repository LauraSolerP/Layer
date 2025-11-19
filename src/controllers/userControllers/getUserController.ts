import { Request, Response } from "express"
import { userService } from "../../service/userService"

export class GetUserController {

    constructor(private readonly service: userService) {}

    async run(req: Request, res: Response): Promise<Response> {

        const id = res.locals.userId

        try {

            await this.service.findUserById(id)

            return res.status(200).json({
                ok: true,
                id: req.params.id
            })

        } catch (error: any) {

            if (error.name === "UserNotFound") {
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
