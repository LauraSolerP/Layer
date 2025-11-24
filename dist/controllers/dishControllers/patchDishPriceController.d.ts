import { Request, Response } from "express";
import { dishService } from "../../service/dishService";
export declare class PatchDishPriceController {
    private readonly service;
    constructor(service: dishService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchDishPriceController.d.ts.map