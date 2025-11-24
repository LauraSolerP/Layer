import { Request, Response } from "express";
import { dishService } from "../../service/dishService";
export declare class PutDishController {
    private readonly service;
    constructor(service: dishService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=putDishController.d.ts.map