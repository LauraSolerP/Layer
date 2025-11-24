import { Request, Response } from "express";
import { orderService } from "../../service/orderService";
export declare class GetOrdersController {
    private readonly service;
    constructor(service: orderService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=getOrdersController.d.ts.map