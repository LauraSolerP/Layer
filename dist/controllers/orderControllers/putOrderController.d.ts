import { Request, Response } from "express";
import { orderService } from "../../service/orderService";
export declare class PutOrderController {
    private readonly service;
    constructor(service: orderService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=putOrderController.d.ts.map