import { Request, Response } from "express";
import { userService } from "../../service/userService";
export declare class PatchUserPasswordController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchUserPasswordController.d.ts.map