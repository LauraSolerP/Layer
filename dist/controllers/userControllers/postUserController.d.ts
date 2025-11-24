import { Request, Response } from "express";
import { userService } from "../../service/userService";
export declare class PostUserController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=postUserController.d.ts.map