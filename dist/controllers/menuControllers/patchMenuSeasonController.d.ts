import { Request, Response } from "express";
import { menuService } from "../../service/menuService";
export declare class PatchMenuSeasonController {
    private readonly service;
    constructor(service: menuService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchMenuSeasonController.d.ts.map