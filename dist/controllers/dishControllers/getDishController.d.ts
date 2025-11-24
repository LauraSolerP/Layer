import { Request, Response } from "express";
import { dishService } from "../../service/dishService";
export declare class GetDishController {
    private readonly service;
    constructor(service: dishService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=getDishController.d.ts.map