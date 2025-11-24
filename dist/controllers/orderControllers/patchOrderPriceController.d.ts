import { Request, Response } from "express";
import { orderService } from "../../service/orderService";
export declare class PatchOrderPriceController {
    private readonly service;
    constructor(service: orderService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchOrderPriceController.d.ts.map