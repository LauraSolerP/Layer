import { Request, Response } from "express";
import { truckService } from "../../service/truckService";
export declare class GetTrucksController {
    private readonly service;
    constructor(service: truckService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=getTrucksController.d.ts.map