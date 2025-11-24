import { Request, Response } from "express";
import { truckService } from "../../service/truckService";
export declare class PatchTruckNameController {
    private readonly service;
    constructor(service: truckService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchTruckNameController.d.ts.map