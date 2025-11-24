import { Request, Response } from "express";
import { userService } from "../../service/userService";
export declare class GetUserController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=getUserController.d.ts.map