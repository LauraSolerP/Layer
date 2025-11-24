import { Request, Response } from "express";
import { truckService } from "../../service/truckService";
export declare class DeleteTruckController {
    private readonly service;
    constructor(service: truckService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=deleteTruckController.d.ts.map