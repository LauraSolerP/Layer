import { Request, Response } from "express";
import { dishService } from "../../service/dishService";
export declare class DeleteDishController {
    private readonly service;
    constructor(service: dishService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=deleteDishController.d.ts.map