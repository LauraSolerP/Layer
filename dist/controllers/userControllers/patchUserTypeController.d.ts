import { Request, Response } from "express";
import { userService } from "../../service/userService";
export declare class PatchUserTypeController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchUserTypeController.d.ts.map