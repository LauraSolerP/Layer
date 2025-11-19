import { Request, Response } from "express"
import { userService } from "../../service/userService"

export class PatchUserPasswordController {

    constructor(private readonly service: userService) {}

    async run(req: Request, res: Response): Promise<Response> {

        const id = res.locals.userId
        const { password } = req.body

        try {

            await this.service.updateUser(id, password)

            return res.status(200).json({
                ok: true,
                message: "User updated successfully"
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
