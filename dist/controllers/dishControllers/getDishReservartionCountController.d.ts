import { Request, Response } from "express";
import { dishService } from "../../service/dishService";
export declare class GetDishReservationCountController {
    private readonly service;
    constructor(service: dishService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=getDishReservartionCountController.d.ts.map