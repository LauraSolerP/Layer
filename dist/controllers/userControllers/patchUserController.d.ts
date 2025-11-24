import { Request, Response } from "express";
import { userService } from "../../service/userService";
export declare class PatchUserController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=patchUserController.d.ts.map