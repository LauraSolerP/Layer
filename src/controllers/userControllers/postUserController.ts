import { Request, Response } from "express"
import { userService } from "../../service/userService"

export class PostUserController {

    constructor(private readonly service: userService) {}

    async run(req: Request, res: Response): Promise<Response> {

        const { name, surname, email, password, type } = req.body

        try {

            await this.service.createUser(name, surname, email, password, type)

            return res.status(200).json({
                ok: true,
                message: "User created successfully"
            })

        } catch (error: any) {

            if (error.name === "ExistingEmailError") {
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
