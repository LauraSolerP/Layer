import { Request, Response } from "express";
import { truckService } from "../../service/truckService";
export declare class GetTruckController {
    private readonly service;
    constructor(service: truckService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=getTruckController.d.ts.map