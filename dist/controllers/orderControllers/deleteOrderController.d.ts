import { Request, Response } from "express";
import { orderService } from "../../service/orderService";
export declare class DeleteOrderController {
    private readonly service;
    constructor(service: orderService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=deleteOrderController.d.ts.map