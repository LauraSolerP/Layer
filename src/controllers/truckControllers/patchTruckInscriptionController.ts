import { Request, Response } from "express"
import { inscriptionService } from "../../service/inscriptionService"

export class PatchTruckInscriptionController {

    constructor(private readonly service: inscriptionService) { }

    async run(req: Request, res: Response): Promise<Response> {

        const { id, participation } = req.body

        try {

            const result = await this.service.updateInscription(id, participation)

            return res.status(200).json({
                ok: true,
                message: "Inscription updated successfully",
                inscription: result.updated,
                alternatives: result.alternatives
            })

        } catch (error: any) {

            if (error.name === "InscriptionNotFound") {
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
