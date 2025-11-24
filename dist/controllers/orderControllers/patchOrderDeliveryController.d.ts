import { Request, Response } from "express";
import { orderService } from "../../service/orderService";
export declare class PatchOrderDeliveryController {
    private readonly service;
    constructor(service: orderService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchOrderDeliveryController.d.ts.map