import { Request, Response } from "express";
import { inscriptionService } from "../../service/inscriptionService";
export declare class PatchTruckInscriptionController {
    private readonly service;
    constructor(service: inscriptionService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchTruckInscriptionController.d.ts.map