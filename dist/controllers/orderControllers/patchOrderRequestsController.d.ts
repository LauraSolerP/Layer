import { Request, Response } from "express";
import { orderService } from "../../service/orderService";
export declare class PatchOrderRequestsController {
    private readonly service;
    constructor(service: orderService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchOrderRequestsController.d.ts.map