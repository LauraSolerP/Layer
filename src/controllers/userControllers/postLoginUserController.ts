import { Response, Request } from "express"
import { TokenManager } from "../../service/tokenManagerService"
import { userService } from "../../service/userService"


export class PostLoginUserController {

    constructor(private readonly service: userService) {}

    async run (req: Request, res: Response): Promise<Response> {

        const email = req.body.email
        const password = req.body.password

        try{

            const user = await this.service.findUserByEmail(email, password)
            const token = await TokenManager.generate({ sub: user.id })
            return res.status(200).json({
                ok: true,
                data: {
                    token
                }
            })

        }catch (error: any) {

            if (error.name === "IncorrectPasswordError") {
                return res.status(401).json({
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