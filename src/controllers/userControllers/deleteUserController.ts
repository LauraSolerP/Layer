import { Request, Response } from "express"
import { userService } from "../../service/userService"

export class DeleteUserController {

    constructor(private readonly service: userService) {}

    async run(req: Request, res: Response): Promise<Response> {

        const userIdToDelete = req.params.id
        const authenticatedUserId = res.locals.userId

        try {

            await this.service.deleteUser(userIdToDelete, authenticatedUserId)

            return res.status(204).json({
                ok: true,
                message: "Usuari esborrat correctament"
            })

        } catch (error: any) {
            return res.status(404).json({
                ok: false,
                message: error.message
            })
        }
    }
}
