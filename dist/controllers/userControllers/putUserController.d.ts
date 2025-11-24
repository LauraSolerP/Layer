import { Request, Response } from "express";
import { userService } from "../../service/userService";
export declare class PutUserController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=putUserController.d.ts.map